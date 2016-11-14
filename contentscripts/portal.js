console.log("Removing sapMInputBaseDisabled");

var divs = document.getElementsByTagName("div");

for( i=0; i < divs.length; i++ )
{
	console.log(divs[i])
	if (divs[i].classList.contains('sapMInputBaseDisabled'))
	{
		divs[i].classList.remove('sapMInputBaseDisabled');
	}
}
