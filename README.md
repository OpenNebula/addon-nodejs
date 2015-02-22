# addon-nodejs

[![NPM](https://nodei.co/npm/opennebula.png?downloads=true)](https://nodei.co/npm/opennebula/)

[OpenNebula](http://opennebula.org) XMLRPC Nodejs client.

## Installation

``` bash
npm install OpenNebula/addon-nodejs
```

## Bugs

### This release is currently broken on Node v0.12.0

## Usage

* Input options are directly passed to OpenNebula. Check [OpenNebula XMLRPC API documentation](http://docs.opennebula.org/4.10/integration/system_interfaces/api.html) for more details.
* Return values are unchanged from OpenNebula, official documentation will also apply to them.
* Check the tests and examples folder for more examples.

### Getting started

To use `opennebula` first you need to instantiate it:

``` js
var OpenNebula = require('opennebula');
var one = new OpenNebula(process.env.ONE_CREDENTIALS, process.env.ONE_HOST);

one.version(function(err, data) {
  console.log(data);
});
//...
```
### Manipulating a VM:

``` js
// create a vm entity. does not query API
var vm = one.getVM(122);

// query API for vm info
vm.info(function (data) {
  console.log(data);
});

vm.action('reboot', function(err, data) {
  console.log(data);
});

//...
```

``` js
var template = one.getTemplate(4);

template.instantiate('test_one', undefined, undefined, function(err, vm) {
  vm.action('delete', function(err, data) {
    console.log(data);
  });
});

//...
```

``` js
one.createVM('GRAPHICS=[TYPE="vnc",LISTEN="0.0.0.0"]\nMEMORY="1024"\n FROM_APP="53e767ba8fb81d6a69000001"\nVCPU="1"\nFROM_APP_NAME="CentOS 6.5 - KVM"\nOS=[ARCH="x86_64"]\n NIC=[NETWORK="private"]\nLOGO="images/logos/centos.png"\nCPU="0.5"\n DISK=[IMAGE="CentOS-6.5-one-4.8",IMAGE_UNAME="oneadmin"]\n', false, function(err, vm) {

  vm.action('delete', function(err, data) {
    console.log(data);
  });
});

//...
```

## Spec

### OpenNebula

* one.getAccounting(callback, filter, start, end)

* one.version(callback)
* one.config(callback)
* one.getVM(id)
* one.createVM(template, state, callback)
* one.getVMs(callback, userFilter, startID, endID, stateFilter)
* one.getHost(id)
* one.createHost(hostname, immad, vmmad, vnmad, cluster, callback)
* one.getHosts(callback)
* one.createTemplate(template, callback)
* one.getTemplate(id)
* one.getTemplates(callback, userFilter, startID, endID)
* one.createCluster(name, callback)
* one.getCluster(id)
* one.getClusters(callback)
* one.createGroup(name, callback)
* one.getGroup(id)
* one.getGroups(callback)
* one.createVNet(template, cluster, callback)
* one.getVNet(id)
* one.getVNets(callback, userFilter, startID, endID)
* one.createUser(username, password, driver, callback)
* one.login(username, token, period, callback)
* one.getUser(id)
* one.getUsers(callback)
* one.createDatastore(template, cluster, callback)
* one.getDatastore(id)
* one.getDatastores(callback)
* one.createImage(template, datastore, callback)
* one.getImage(id)
* one.getImages(callback, userFilter, startID, endID)
* one.createZone(template, callback)
* one.getZone(id)
* one.getZones(callback)
* one.createDocument(template, type, callback)
* one.getDocument(id)
* one.getDocuments(callback, userFilter, startID, endID)

### VM

* vm.info(callback)
* vm.action(action, callback)
* vm.deploy(host, datastore, enforce, callback)
* vm.diskSnapshot(disk, name, type, imed, clone, callback)
* vm.attachDisk(disk, callback)
* vm.detachDisk(disk, callback)
* vm.attachNIC(disk, callback)
* vm.detachNIC(disk, callback)
* vm.chown(owner, callback)
* vm.chgrp(group, callback)
* vm.chmod(user_use, user_manage, user_admin, group_use, group_manage, group_admin, other_use, other_manage, other_admin, callback)
* vm.rename(name, callback)
* vm.createSnapshot(name, callback)
* vm.deleteSnapshot(name, callback)
* vm.snapshotrevert(snapshot, callback)
* vm.resize(template, enforce, callback)
* vm.update(template, replace, callback)
* vm.recover(recover, callback)

### Datastore

* datastore.info(callback)
* datastore.update(content, whole, callback)
* datastore.delete(callback)
* datastore.chown(owner, callback)
* datastore.chgrp(group, callback)
* datastore.chmod(user_use, user_manage, user_admin, group_use, group_manage, group_admin, other_use, other_manage, other_admin, callback)
* datastore.rename(name, callback)

### Template

* template.info(callback)
* template.update(content, whole, callback)
* template.instantiate(name, state, template, callback)
* template.clone(name, callback)
* template.delete(callback)
* template.chown(owner, callback)
* template.chgrp(group, callback)
* template.chmod(user_use, user_manage, user_admin, group_use, group_manage, group_admin, other_use, other_manage, other_admin, callback)
* template.rename(name, callback)

### Cluster

* cluster.info(callback)
* cluster.update(content, whole, callback)
* cluster.delete(callback)
* cluster.rename(name, callback)
* cluster.addHost(host, callback)
* cluster.delHost(host, callback)
* cluster.addDatastore(datastore, callback)
* cluster.delDatastore(datastore, callback)
* cluster.addVnet(vnet, callback)
* cluster.delVnet(vnet, callback)

### Document

* document.info(callback)
* document.update(content, whole, callback)
* document.clone(name, callback)
* document.delete(callback)
* document.chown(owner, callback)
* document.chgrp(group, callback)
* document.chmod(user_use, user_manage, user_admin, group_use, group_manage, group_admin, other_use, other_manage, other_admin, callback)
* document.rename(name, callback)

### Group

* group.info(callback)
* group.update(content, whole, callback)
* group.delete(callback)
* group.quota(template, callback)
* group.addProvider(group, zone, cluster, callback)
* group.delProvider(group, zone, cluster, callback)

### Host

* host.info(callback)
* host.enable(callback)
* host.disable(callback)
* host.update(template, merge, callback)
* host.delete(callback)
* host.rename(name, callback)

### Image

* image.info(callback)
* image.update(content, whole, callback)
* image.clone(name, callback)
* image.delete(callback)
* image.chown(owner, callback)
* image.chgrp(group, callback)
* image.chmod(user_use, user_manage, user_admin, group_use, group_manage, group_admin, other_use, other_manage, other_admin, callback)
* image.rename(name, callback)
* image.persistent(persistent, callback)
* image.chtype(type, callback)
* image.enable(callback)
* image.disable(callback)

### User

* user.info(callback)
* user.update(content, whole, callback)
* user.delete(callback)
* user.chgrp(group, callback)
* user.passwd(password, callback)
* user.chauth(driver, password, callback)
* user.quota(template, callback)
* user.addgroup(group, callback)
* user.delgroup(group, callback)

### VNet

* vnet.info(callback)
* vnet.update(content, whole, callback)
* vnet.addRange(content, callback)
* vnet.delRange(range, callback)
* vnet.freeRange(range, callback)
* vnet.reserve(template, callback)
* vnet.updateRange(template, callback)
* vnet.hold(template, callback)
* vnet.release(template, callback)
* vnet.delete(callback)
* vnet.chown(owner, callback)
* vnet.chgrp(group, callback)
* vnet.chmod(user_use, user_manage, user_admin, group_use, group_manage, group_admin, other_use, other_manage, other_admin, callback)
* vnet.rename(name, callback)

### Zone

* zone.info(callback)
* zone.update(content, whole, callback)
* zone.delete(callback)
* zone.rename(name, callback)

## Tests

Tests are implemented using `mocha` and `chai`. Run them with `npm test`.

## Examples

Check the examples folder for more specific use cases examples.

## License

See LICENSE.md