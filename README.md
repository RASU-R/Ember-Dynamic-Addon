# ember-dynamic

Create a dynamic table using ember-dynamic addon

## Compatibility

* Ember.js v4.8 or above
* Ember CLI v4.8 or above
* Node.js v18 or above


## Installation

```
ember install ember-dynamic
```


## Usage

After the installation, diectly use it in your project templates(.hbs files) like a component tag. 
as per the need to perform a update, delete operations, just pass the parameters(arguments) to the dynamic table addon.
parameters are: 
* @datas (pass the data to table). 
* @delete (delete function to removing the row in the table).
* @remove (remove function to perform multiple row delete based on the selections(using checkbox)). 
* @update (edit function to update the table rows). 
* @EditRouteName (for editing the row, you need to pass the route name. 
   (for example) if you click the edit button, route goes to /EditRouteName/:id)
* @className (to setting the class name for table). 

### Note: passing the datas available in the format of array of objects.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).

## About
Created and maintained by Rasu.R(www.github.com/RASU-R). Thanks for using my addons...
