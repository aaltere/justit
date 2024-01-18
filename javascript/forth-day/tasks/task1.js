const shows = [
    "Suits", 
    "Breaking bad", 
    "V for vendetta", 
    "Pulp fiction", 
    "South park"
];

shows.push("The Simpsons", "A Silent Voice");

for (const show in shows)
{
    console.log(shows[show]);
}