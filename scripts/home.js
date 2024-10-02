console.log("home.js");

document.querySelector('main').style.opacity = 1;
document.querySelector('.questionbtn').addEventListener('click', (el) => {
    const fieldset = el.target.parentElement
    const answer = fieldset.getAttribute('data-answer')
    console.log('clicked', el.target.parentElement)
    const checked = fieldset.querySelector('input:checked')

    if (checked.value === answer) {
        checked.parentElement.style.backgroundColor = 'green';
        const tooltip = el.target.closest('tool-tip')
        console.log(tooltip.shadowRoot.querySelector('.tiproot'))
        
        const tiproot = el.target.closest('tool-tip').querySelector('.tiproot')
        tooltip.shadowRoot.querySelector('.tiproot').style.backgroundColor = 'green'
        tooltip.shadowRoot.querySelector('.tiproot').style.color = 'white'
        console.log(tiproot)
        tooltip.exit()
    } else {
        checked.parentElement.style.backgroundColor = 'red';
    }
    console.log(checked)
})

const openTense = (ev, tense) => {
  const tabcontents = document.getElementsByClassName("tabcontent") || [];
  // Get all elements with class="tabcontent" and hide them
  for (i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  const tablinks = document.getElementsByClassName("tablinks") || [];
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tense).style.display = "block";
  ev.currentTarget.className += " active";
};
