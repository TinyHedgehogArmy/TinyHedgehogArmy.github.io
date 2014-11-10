#To do list

##Data creation and cleaning
- [x] Compile together all the datasets
- [x] Test if scraping google for the annual/financial reports is likely to give useful results (well, they're restricting to 100 per day, but that's OK.
- [x] http://stackoverflow.com/questions/4490983/google-search-with-python/4491058#4491058 (Nah, not worth effort - manual)
- [ ] Compile list from GiveNow.com.au as well.
- [ ] Start compiling revenue numbers.
- [ ] Manually code the holdouts
- [ ] Scrape sites, get additional coding information (how to implement this?)

##Design
- [x] Decide on colour scheme
- [x] Start coding the main website page
- [x] Refine logo (either create more block colour, or make all lines same width)
- [x] Create icons for the three options - list, curated, faq

##Main page
- [x] Write text
- [x] Fix logo (add writing to SVG?)
- [ ] Do SEO kind of stuff
- [ ] Create menu bar at top - add 'Contact' and 'About'
- [x] Implement mouseover and other similar behaviour
- [x] Replace SVGs so they degrade gracefully in ie.
- [x] Fix rendering using in-browser fonts of main SVG
- [x] Make it so that the top two boxes are in a wrapper of 70% vh, but can change height within that
- [ ] Fix images so that they're all the same height

##Decision page
- http://jsbin.com/carihurugute
- http://jsbin.com/yuzako
- http://jsbin.com/regefezololi
- http://jsbin.com/xujut
- http://jsbin.com/lilobekobo
- http://jsbin.com/hadiho/
- http://jsbin.com/qolotazabi
- http://jsbin.com/tupumevoqe
- http://jsbin.com/xosuhu
- [x] Put in actual questions!
- [x] Refine design
- [x] Decide on how it will fit within the larger website structure
- [x] Add in visual representation of the breadcrumb
- [x] Add in tracking of how far through they are
- [x] Tooltips/mouseover information
- [x] Click on breadcrumb to go back to that question (prompt for non-universal questions)
- [x] Code help popups (https://github.com/heelhook/chardin.js could be the answer?)
- [ ] Make more mobile-friendly (reduce padding, increase text size on small screens)
- [ ] Fix the animation so they fade rather than vanish entirely (low priority).
- [x] Fix progress bar location and give heading.
- [ ] Set up cookie so they don't lose progress (low priority)

##Results page
- [ ] Decide on what this will look like (both after the decision page and straight)
- [ ] Investigate how to pass from javascript to php
- [x] Investigate firebase as an option (weak queries, which is the only reason I need a database in the first place)
- [ ] Actually code in PHP/mySQL  
- [ ] Make sure that people can come back to their answers! Each results page will have (by default) a unique URL, so we can just digest that and give it to them.
- [ ] Program a fallback in case their selection doesn't have any results (ideally, with a notification sent to me)
- [ ] Code popup box with all the details of a particular result
- [ ] Code help popups
- [ ] Code ability to switch views as well as change filter (top 5 etc).

##MySQL database
- Use a temp table for the different sorts instead of querying the database multiple times
- Use BIT type for the 1,0 columns
- Index all the fields to be searched
- Use 'Enum' for the size field


#Design stuff

##Colour scheme
Main dark blue: 286E94
Highlights blue: 52AEE1
Highlights orange: C74F21

See https://color.adobe.com/

##Diagonal lines
http://www.amaslo.com/2012/06/drawing-diagonal-line-in-htmlcssjs-with.html

##Circles
http://jsfiddle.net/rkEMR/


#Phase II

##New functionality
- Add short descriptions and logos for each charity
- In-built donation function
- Ability to donate to multiple charities at once.
- Ability to donate without being pestered.
- 'Star' charities or otherwise list as favourites - have a 'basket' of favourite charities
- Get the ability to track what various people have selected (effectively, just an activity log - all you need is for it to write to a log or something when they're done).
- Mailing list to remind people at tax time about their charity.
- Search function - search the short descriptions of their work.

##New data
- Three years of annual reports = 'fastest growing' metric available.
- Start collecting profit/loss data?
