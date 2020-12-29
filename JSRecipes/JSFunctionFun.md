//using string literal for code execution.
//-------------
// Don't use eval();
// eval("obj.insideObj.property." + key + " = " + value + ";");

if you can try to iterate over it with object notation
 - function(obj) {
      this.variable[obj.key] = obj.value;

Hopefully I can comback to this in a bit.
