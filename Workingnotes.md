#To do list

##Bug fixes and improvements

- [x] Fix form validation!!!
- [x] Add prompt to share on successful click through to results page from guide
- [x] Add bio to about page
- [x] Fix colours for drop down boxes (more contrast)
- [x] Add tags to each charity to help them be searched more easily
- [x] fix clickable divs safari homepage (difficult to test without mac!)
- [x] Better ratio explanation - how to do so?
- [x] Put navigation in footer!
- [x] Add donation/volunteer icons (from FontAwesome?)
- [ ] Proofread, simplify language and headings
- [ ] Fix text size on large monitors
- [ ] Tooltips on display page
- [ ] Improve google analytics!

## Pretty URLS
- http://code.tutsplus.com/tutorials/an-in-depth-guide-to-mod_rewrite-for-apache--net-6708
- http://www.generateit.net/mod-rewrite/index.php

## Add charities
- [x] Add communities overseas/asylum seekers - ASRC, http://asylumseekerscentre.org.au/, http://www.refugeecouncil.org.au/
- [x] Check HIV charities: https://www.everydayhero.com.au/charity/search_for_a_charity?terms=9&search_type=tag
- [x] Ronald mcdonald house
- [x] ANZUP
- [x] PetRescue
- [x] Medicins Sans Frontieres
- [ ] Fix Wesley Mission
- [ ] Add girl guides

##Traffic driving
- [ ] Start a forum/mailing list
- [ ] Create facebook group
- [ ] Submit to StumbleUpon
- [ ] Submit to Reddit(?)
- [x] Answer questions on Quora
- [ ] Consider writing posts for the Conversation (later)
- [ ] Consider writing posts for other blogs on the topic (later)

## Phase 2 to implement
- [x] Search button
- [ ] Pick multiple areas or groups of people
- [ ] Social media stream
- [ ] Relevancy - use core activity? Or how many others also ticked? Use the data collected from the other websites?
- [ ] Featured paths. Stories of different people's paths. Current story on homepage with recommended charities
- [ ] Blog/twitter account talking about transparency
- [ ] Charity pictures
- [x] Personal dashboard
- [ ] Improve donation button
- [ ] Put 'starter' for guide on homepage - ask them a single question, then take them to the question engine.


##Final stuff
- [x] Add in breadcrumb for results page
- [x] Hover details for transparency
- [x] Add logo to guide
- [x] Fix the text that appears above the guide page! (replace with own overlay thing?)
- [x] Add 'Next' and 'Prev' buttons for pages
- [x] Compress all images
- [x] Fix images on homepage
- [ ] Code help popups
- [x] Fix small screens results page
- [x] Fix design about page

##Data creation and cleaning
- [x] Compile together all the datasets
- [x] Test if scraping google for the annual/financial reports is likely to give useful results (well, they're restricting to 100 per day, but that's OK.
- [x] http://stackoverflow.com/questions/4490983/google-search-with-python/4491058#4491058 (Nah, not worth effort - manual)
- [x] Start compiling revenue numbers.
- [x] Manually code the holdouts
- [x] Scrape sites, get additional coding information (how to implement this?)
- [x] Fix coding of formerly NULL rows (cystic fibrosis SA, etc).
- [x] Ovarian cancer australia and RSPCA QLD ratio.
- [x] Fix year of creation.
- [x] Fix universities not being coded correctly.

##Design
- [x] Decide on colour scheme
- [x] Start coding the main website page
- [x] Refine logo (either create more block colour, or make all lines same width)
- [x] Create icons for the three options - list, curated, faq

##Main page
- [x] Write text
- [x] Fix logo (add writing to SVG?)
- [x] Implement mouseover and other similar behaviour
- [x] Replace SVGs so they degrade gracefully in ie.
- [x] Fix rendering using in-browser fonts of main SVG
- [x] Make it so that the top two boxes are in a wrapper of 70% vh, but can change height within that
- [x] Test in Firefox/Safari/IE
- [x] Add more text for describing what we're doing and why
- [x] Create 'Update' and 'New Charity' forms.
- [ ] Do SEO kind of stuff
- [ ] Create menu bar at top - add 'Contact' and 'About'
- [ ] Fix images so that they're all the same height
- [x] Add in google tracking
- [ ] Optimise for mobile and overall: https://developers.google.com/speed/pagespeed/insights/
- [x] Define viewport (see pagespeed)
- [x] Add logo into header for all pages, have it link to home
- [ ] Use waypoints for fancy animation on viewport (low priority)

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
- [x] Fix progress bar location and give heading.
- [x] Add in webCodes for each question
- [x] Fix webCodes when they reset!
- [x] Fix design - new banner at top, move down help button
- [ ] Make more mobile-friendly (reduce padding, increase text size on small screens, have tabs for top 5 lists)
- [ ] Fix the animation so they fade rather than vanish entirely (low priority).
- [ ] Set up cookie so they don't lose progress (low priority)

##Results page
- changepath.nfshost.com/
- http://changepath.nfshost.com/results.php?Type=Donate&NT=1&Environmental=1
- [x] Decide on what this will look like (both after the decision page and straight)
- [x] Investigate how to pass from javascript to php
- [x] Investigate firebase as an option (weak queries, which is the only reason I need a database in the first place)
- [x] Actually code in PHP/mySQL  
- [x] Use prepared statements
- [x] Make sure that people can come back to their answers! Each results page will have (by default) a unique URL, so we can just digest that and give it to them.
- [x] Program a fallback in case their selection doesn't have any results (ideally, with a notification sent to me)
- [x] Code popup box with all the details of a particular result
- [x] For top: Change view, filter, share, help. 
- [x] Fix the fact that for small results the table gets ridiculously massive.
- [x] Have default values for simply going to the page
- [x] Add hover on tableheaders that can be clicked
- [x] Code ability to switch views as well as change filter (top 5 etc).
- [x] Add 'This is wrong' flag (with report database)
- [x] Code welcome box if visiting from homepage (default sort should REMOVE higher education)
- [x] Implement different volunteer display
- [x] Fix bug in sorting (ie come in, click on sort column, breaks URL).
- [x] Fix bug where you can't click on the top smalltables anymore.
- [ ] Code help popups
- [x] Code help on hover for rating, ratio
- [x] Fix formatting on smaller screens
- [x] Add 'Next' and 'Prev' buttons for pages

##Display results
- [x] Add tables and improve formatting
- [x] Error conditions for '$0' finances
- [x] Add 'report' flag
- [ ] Add 'help' flag 
- [x] Make canvas width depend on window width
- [x] Fix formatting on smaller screens

##Bugs fixed
- [x] Fix width of bottom bar on homepage

- [x] fix aside text align safari (difficult to test without mac!)
- [x] fix progress bar (async removed, should work)
- [x] Add 'donate now' button
- [x] Change to lgbti
- [x] Donate overseas fix
- [x] Dad text fixes
- [x] More help hovers on results page
- [x] Add ACNC attribution to the footer, put on results page http://data.gov.au/dataset/acnc-register
- [x] Add hover bottom border homepage
- [x] Clear google problems in database
- [x] Add report button to main page
- [x] Fix footer on About page
- [x] Fix ABN number
- [x] Make less new windows open?
- [x] BlueCare - no details
- [x] Pacfa - Change details
- [x] Add meta descriptions to all pages (dynamic ones for the php pages!)
- [x] Add AMCS (Australian marine conservation society)
- [x] Fix failed search UX - make it so that searches don't redirect, you just get a 'no results' page with the ability to search again OR fill in the 'missing charity' page.
- [x] Create Dashboard


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
- 'Star' charities or otherwise list as favourites - have a 'basket' of favourite charities (use PHP sessions)
- Get the ability to track what various people have selected (effectively, just an activity log - all you need is for it to write to a log or something when they're done) - will Google track this?
- Mailing list to remind people at tax time about their charity.
- Search function - search the short descriptions of their work.
- Add in AdSense if pageviews get high enough.

##New data
- Three years of annual reports = 'fastest growing' metric available.
- Start collecting profit/loss data?
