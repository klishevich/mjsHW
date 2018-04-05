function Solution1(name) {
  this.name = name;
  this.handleClick = ()  => {
    console.log(this.name);
  }
  this.render = function () {
    return {
        type: 'button',
        buttonClick: this.handleClick
    }
  }
}

const sol1Button = new Solution1('I am button, I am good! Solution 1');
const sol1ButtonRender = sol1Button.render();
document.getElementById('solution1').innerHTML = "<button onclick='sol1ButtonRender.buttonClick()'>Solution 1</button>";
