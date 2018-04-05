function Solution3(name) {
  this.handleClick = function() {
    this.name = name;
    console.log(this.name);
  }
  this.render = function () {
    return {
        type: 'button',
        buttonClick: this.handleClick
    }
  }
}

const sol3Button = new Solution3('I am button, I am good! Solution 3');
const sol3ButtonRender = sol3Button.render();
document.getElementById('solution3').innerHTML = "<button onclick='sol3ButtonRender.buttonClick()'>Solution 3</button>";
