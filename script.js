const Renvoi1 = document.getElementById("renvoi1")
const Renvoi2 = document.getElementById("renvoi2")

const Aud = document.getElementById("aud")
const Latex = document.getElementById("latex")

renvoi1.addEventListener("click", function() {
	Aud.play()
	Aud.scrollIntoView({behavior:"smooth"})
})

renvoi2.addEventListener("click", function() {
	Latex.scrollIntoView({behavior:"smooth"})
})