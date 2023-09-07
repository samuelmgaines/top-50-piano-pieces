# Sam Gaines - Top 50 Piano Pieces Project

## Project Description
### Inspiration
Being a pianist, I often get the question, "What are your top __ piano pieces?". I am always overwhelmed with this question, as there are so many pieces out there, and I don't know where to even start thinking about it. Luckily for me now though, I have created an application to help me find my top 50 piano pieces! The application supports including only piano solo works, only piano concerti, or both in the rankings.

### Pieces Included
The set of pieces used in this application comes mostly from [TalkClassical](https://www.talkclassical.com/), an online forum for classical music discussion. Two threads specifically were created for users to share their favorite piano solo pieces and piano concerti, and a top 200 and top 100 list, respectively, were created based off of number of votes. The piano solo ranking can be found [here](https://www.talkclassical.com/threads/tc-top-200-recommended-solo-keyboard-works.14616/page-48) and the piano concerto ranking can be found [here](https://www.talkclassical.com/threads/the-tc-top-100-most-recommended-keyboard-concerti.12546/page-27). I felt some pieces were wrongfully excluded, so I took the liberty to add those. Some other pieces were removed for various reasons.

## Technology

The backend of the application is hosted locally on a JSON server. The frontend of the application was created with React.js.

## Usage

In the root directory of the application, run `npx json-server --watch data/db.json --port 8000` to start the JSON server. Then, run `npm start` to start the React application. From there, follow the instructions in the interface to find your top 50 piano pieces.
