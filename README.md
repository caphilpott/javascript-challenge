## javascript-challenge

This assignment came together nicely as it's linkage to our recent course work was relatively easy to follow and incrementally build. I used console.log to track and confirm inputs were being captured and the filter was being deployed effectively. 

I first used console.log to confirm the data.js file was being read. I then built a filter to just manually test that it would limit the .js records being pulled. 

Next, I built the arrow function to capture and record the .js records into the html table.

I then built the process to capture, store and apply the input value as a date filter against the .js records to be displayed. 

Lastly, I coupled those processes to run using the click button or enter key to refresh the page results. 

Two areas I found challenging were tying the hitting "enter" to the "form" section of the page (I set form id="form"). Secondly, the data table wasn't refreshing on "enter" or "click" despite the criteria being stored. I solved this by removing the previous table results prior to applying the new ones (d3.selectAll("td").remove().   

The bonus section really came down to just copying the date input/filter four times over to add the other criteria options. I did some labeling to make it apparent what each of the options were and included valid place holders for each to guide the user on input options. 

I did not have time to incorporate dropdown filters which would have facilitated easier and more accurate filtering. 

The most challenging aspect of the Bonus problem for me was getting multiple criteria to fuction together. I used the && (And) feature to combine the 5 criteria and used ".includes" instead of "===" to allow the criteria to behave as if a SQL "Like" filter was being deployed. If a user leaves 1 or more inputs blank, they're effectively ignored. If all the inputs are blank, all the records will be returned as if not filtering was applied. 

One thing that stopped working when multiple criteria were added was the updata on "enter" feature. I don't know why and I have posted the question to the class. The click button feature to filter works just fine. 

This was a fun assignment as most things worked within 5 or ten attemps (except the enter function on multiple criteria). The topic was entertaining as well. 

Keep an eye out for UFO's!

![alt text](https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY0MTk2MzMzNzA2NjE4NzA1/ufo-traits-promo-666735176.jpg)