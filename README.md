# FB-messenger-analysis
### Project aim
Interactive visualization of personal fb messenger data in shiny app.
### How does it work?
After downloading data from our facebook account this app will allow us to create interactive visualization of our messenger analysis.
- python script: collects and filter data from downloaded data dump, creates a data frame as csv file
- R script: collects all scripts which had been used to carry out the analysis, creates csv files used by shiny app
- App.R scipr: shiny script with final visualization
###TODO
Make app user-friendly: reduce needed steps to running python script and opening shiny app.
Possible solution data reading/selecting module in shiny app.
