function Solution2(name) {
  this.name = name;
  this.handleClick = function () {
    console.log(this.name);
  }
  this.render = function () {
    return {
        type: 'button',
        buttonClick: this.handleClick
    }
  }
  this.handleClick = this.handleClick.bind(this);
}

const sol2Button = new Solution2('I am button, I am good! Solution 2');
const sol2ButtonRender = sol2Button.render();
document.getElementById('solution2').innerHTML = "<button onclick='sol2ButtonRender.buttonClick()'>Solution 2</button>";
