# Nursery Attendance Management App

## Setup Instructions

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following content:
   ```
   NEXT_PUBLIC_TOKEN=your_access_token_here
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser
6. Alternately you can run `npm run build` and then `npm run start` to run the app in production mode.

## Considerations

I've focused on the following:

- Using the Famly API to fetch data
- Using Tanstack React Query to fetch data, and handle caching
- Using Tanstack Table to display the data
- Using Flowbite for styling
- Using Next.js Image to display images
- Proper response to the user on checkin/checkout or if there is an error in pickup time
- Making the UX quick, easy and logical

I wanted to make it look okay, and not only functional, but I'm not the best designer.
I also focused on the UX to make a solution that is simple and to the point, but still possible to extend with more features.

## AI tools

- I use Cursor as the IDE so it helps me with some autocompletions and suggestions.
- I've copied some boilerplate code from Tanstack to setup the table.
- I got Cursor to make the initial function for grouping pagination by letters, but later changed it out to use `reduce` rather than the initial `for` loop it suggested.

## Time used

I ended up spending more time, since its a fun little task, and also wanted to make it look okay. I therfore spent some time looking for a good UI library as a starting point.

I also have bad experiences with making something that is not finished, even for a minor case, so I'd rather make it worth the time, and make it look and behave properly.

It can of course be much more polished and prettier.

Approximately 6 hours spent.

## Improvements

- Design, it's not very pretty right now
- Maybe having a checkout button directly from the table
- Have pagination state in the url
- Handle the pickup time better so the user can choose not to set it on checkin.
- Clear pickup time on checkout. (a normal app would probably have a default or a schedule that is set beforehand)
