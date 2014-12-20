# opennebula

[![NPM](https://nodei.co/npm/opennebula.png?downloads=true&stars=true)](https://nodei.co/npm/opennebula/)

Opennebula XMLRPC Nodejs client.


## Installation

`npm install opennebula`

## Usage

### Getting started

To use `dockerode` first you need to instantiate it:

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
// create a container entity. does not query API
var vm = one.getVM(122);

// query API for container info
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

### Image

### User

### VNet

### Zone

## Tests

Tests are implemented using `mocha` and `chai`. Run them with `npm test`.

## Examples

Check the examples folder for more specific use cases examples.

## License

Pedro Dias - [@pedromdias](https://twitter.com/pedromdias)

Licensed under the Apache license, version 2.0 (the "license"); You may not use this file except in compliance with the license. You may obtain a copy of the license at:

    http://www.apache.org/licenses/LICENSE-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the license is distributed on an "as is" basis, without warranties or conditions of any kind, either express or implied. See the license for the specific language governing permissions and limitations under the license.
