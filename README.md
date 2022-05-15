# covid19-data-visualization
> Deliverable of UTS 32933 Research Project Autumn 2021
> supervisor: Dr. Wei Liu

# What is it
> A data visualization project for Covid-19 trends in Australia, America and China

# Prerequisites
> To run the Vue.js project, you need to install npm to adapt package of code
> Find instructions at: https://docs.npmjs.com/getting-started\

### Limitation
The design of China data set is currently seperate from overall project.


# Build Setup

To run the code, you need to download the code and launch terminal at the local repository.

## Step 1. install dependencies
Run **npm install** to install all the related dependency of our project.

## hot reload at localhost:8080
Run **npm run dev** to run the project at local sever.
![image](https://user-images.githubusercontent.com/103825912/168484038-f14ddcbc-0112-455e-9e64-2b20dd650e12.png)
You can click the link to access our web application at local browser.
If you want to quit, run Control + c to shut the project.

# Project demonstration
**Homepage**
 ![image](https://user-images.githubusercontent.com/103825912/168484218-e066ab48-2ab7-4449-851f-0e2326597578.png)

On the first page, we run a simple introduction to our application. There are links to each country's Covid data in the top banner.

**American Data Set**
 ![image](https://user-images.githubusercontent.com/103825912/168484222-37c88947-16f7-42f5-b60f-221cc037b69b.png)
First is the daily new case of the whole country. The histogram includes data for the past 15 days to show the trend.

![image](https://user-images.githubusercontent.com/103825912/168484234-8991236a-647b-49f3-acc8-0eac9bf5eb89.png)
The second chart shows the new case in these significant states in the past week.

![image](https://user-images.githubusercontent.com/103825912/168484240-60714ac1-d80a-48b0-bfc0-321153df72c4.png)
The third chart shows the mortality of Covid-19 cases in each state.

**Australian Data Set**
![image](https://user-images.githubusercontent.com/103825912/168484248-6b556d55-f7fe-401d-b408-ac3e2507234b.png) 
This chart shows the daily new case. The number is separate as different age groups. Different colours were used to represent whether the patient is PCR confirmed. The demonstration of charts and data source page is linked below.

![image](https://user-images.githubusercontent.com/103825912/168484258-ad747c85-f6e6-41a8-8dcc-d40f08b850cb.png)
The second chart uses a radar map to show the vaccination situation in Australia. The yellow line represents the population of each state, the blue one indicates the number of people getting two shots, and the green one means the number of people getting a booster. The specific number of each situation will occur if the user hovers their mouse on the lines.

![image](https://user-images.githubusercontent.com/103825912/168484264-0609a672-2136-4492-a0e8-351a813e5bbe.png)
The third chart uses a calendar map combined with heat distribution to show the monthly case numbers. Each grid will show a different colour based on the case number. The specific number of each grid will occur if the user hovers their mouse on the lines.

**Data Comparison**
![image](https://user-images.githubusercontent.com/103825912/168484270-15af992e-f4f4-43e4-83f9-1b8f6f2b0550.png) 
This chart uses three different colours of lines to show the case number of each country.

![image](https://user-images.githubusercontent.com/103825912/168484280-14968c80-f750-4106-ac61-16ee99f41a71.png)
This page shows how many vaccines did 100 people get on averagely in three countries by converting a histogram to more like a pie chart.


**Chinese Data Set**
![image](https://user-images.githubusercontent.com/103825912/168484319-028aa978-b98f-48e0-9ca7-29219ba6783c.png)
This part contains three charts include Confirm case in each province, Number of daily case and Case number in different country.

# Contact
If you have any queries, feel free to create an issue or contact me via the email Xiaofeng.Ren@student.uts.edu.au
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
