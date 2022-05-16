# covid19-data-visualization
Deliverable of UTS 32933 Research Project Autumn 2021  
Supervisor: Dr. Wei Liu

# What is it
A data visualization project for Covid-19 trends in Australia, America and China

# Prerequisites
To run the Vue.js project, you need to install npm to adapt package of code  
Find instructions at: https://docs.npmjs.com/getting-started\

### Limitation
The design of China data set is currently seperate from overall project.


# Build Setup

To run the code, you need to download the code and launch terminal at the local repository.

## Step 1. Install dependencies
Run **npm install** to install all the related dependency of our project.

## Step 2. Hot reload at localhost:8080
Run **npm run dev** to run the project at local sever.  
![image](https://user-images.githubusercontent.com/103825912/168484038-f14ddcbc-0112-455e-9e64-2b20dd650e12.png)  
You can click the link to access our web application at local browser.  
If you want to quit, run Control + c to shut the project.
  
# Quick Look at the project
**Homepage**  
 ![image](https://user-images.githubusercontent.com/103825912/168484218-e066ab48-2ab7-4449-851f-0e2326597578.png)  
  
On the first page, we run a simple introduction to our application. There are links to each country's Covid data in the top banner.  
  
**American Data Set**  
 ![image](https://user-images.githubusercontent.com/103825912/168484222-37c88947-16f7-42f5-b60f-221cc037b69b.png)  
First is the daily new case of the whole country. The histogram includes data for the past 15 days to show the trend.   
The chart shows that the number of cases tends to tick on Mondays and Tuesdays, perhaps because the PCR facilities are closed on both days.
  
![image](https://user-images.githubusercontent.com/103825912/168484234-8991236a-647b-49f3-acc8-0eac9bf5eb89.png)  
The second chart shows the new case in these significant states in the past week.  
  
![image](https://user-images.githubusercontent.com/103825912/168484240-60714ac1-d80a-48b0-bfc0-321153df72c4.png)  
The third chart shows the mortality of Covid-19 cases in each state.    
It can be seen from the data that the mortality rate varies greatly among different states, which may be due to the allocation of medical resources and the prevalence of vaccines among different states.
  
**Australian Data Set**  
![image](https://user-images.githubusercontent.com/103825912/168484248-6b556d55-f7fe-401d-b408-ac3e2507234b.png)   
This chart shows the daily new case. The number is separate as different age groups. Different colours were used to represent whether the patient is PCR confirmed. The demonstration of charts and data source page is linked below. 
  
As you can see from the chart, the number of young people diagnosed is much higher than that of other age groups, perhaps due to low vaccination coverage among young people and the likelihood of more clusters of infections in schools.   
  
![image](https://user-images.githubusercontent.com/103825912/168484258-ad747c85-f6e6-41a8-8dcc-d40f08b850cb.png)  
The second chart uses a radar map to show the vaccination situation in Australia. The yellow line represents the population of each state, the blue one indicates the number of people getting two shots, and the green one means the number of people getting a booster. The specific number of each situation will occur if the user hovers their mouse on the lines.   

It can be seen from the chart that the vaccination rate for the first two shots is already very high, but the vaccination rate for Booster is relatively lower, and the vaccine penetration rate does not vary much across the country.  
  
![image](https://user-images.githubusercontent.com/103825912/168484264-0609a672-2136-4492-a0e8-351a813e5bbe.png)  
The third chart uses a calendar map combined with heat distribution to show the monthly case numbers. Each grid will show a different colour based on the case number. The specific number of each grid will occur if the user hovers their mouse on the lines.  
  
Looking at the heat distribution, it can be seen that although confirmed cases remained high in early May, there has been a marked improvement in recent weeks.  
  
**Data Comparison**  
![image](https://user-images.githubusercontent.com/103825912/168484270-15af992e-f4f4-43e4-83f9-1b8f6f2b0550.png)   
This chart uses three different colours of lines to show the case number of each country. It can be intuitively seen that the number of cases in China is low. In contrast, the number of cases in the United States is temporarily high.
  
![image](https://user-images.githubusercontent.com/103825912/168484280-14968c80-f750-4106-ac61-16ee99f41a71.png)  
This page shows how many vaccines did 100 people get on averagely in three countries by converting a histogram to more like a pie chart.  
  
It is not difficult to see that the vaccine penetration rates in China and Australia are higher than those in the United States. At the same time, the three countries are at the forefront of the world in promoting vaccines, which is much higher than the average level.
  
  
**Chinese Data Set**  
![image](https://user-images.githubusercontent.com/103825912/168484319-028aa978-b98f-48e0-9ca7-29219ba6783c.png)  
This part contains three charts: Confirm cases in each province, number of daily cases, and cases number in different countries.  
  
From the colour distribution of the map, it can be seen that the central, northeastern and coastal provinces are most affected by the epidemic. In addition, the number of cases in China began to climb from the end of February with the wave of rework brought about by the end of the Chinese New Year and the prevalence of Omicron. By comparing several significant cities, it can be seen that the current situation in Shanghai is the most severe, and the number of new cases is at a high level. 

# Contact  
If you have any queries, feel free to create an issue or contact me via the email Xiaofeng.Ren@student.uts.edu.au  
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
