The problem in context of this.handleClick.

3 possible ways to make it work:
Solution 1: assign this.handleClick to arrow function
Solution 2: bind this.handleClick to this context of a constructor
Solution 3: assign this.name = name straight in this.handleClick (which is undesirable for the reasson of loosing this.name in constructor context)