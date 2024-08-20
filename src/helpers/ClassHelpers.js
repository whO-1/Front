export function InheritsFrom(obj, baseClass) {
    if (obj instanceof baseClass) {
      return true;
    }
    //console.log("baseClass",baseClass);
    let proto = Object.getPrototypeOf(obj);
    let nr = 0;
    while (proto) {
      nr++;
      // console.log("nr",nr);
      // console.log(proto);
      if (proto === baseClass) {
        return true;
      }
      proto = Object.getPrototypeOf(proto);
    }
    return false;
  }

  //checks if obj inherits from baseClass (multiple inherting also); 