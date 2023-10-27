// well get either weight_kg, weight_lbs from the payload.
// and only one. then well calculate the units in the other system
// let weight_kg, weight_lbs
// if(!weight_kg && !weight_lbs) error
// else if(!weight_kg) -> weight_kg = calculate with weight_lbs
// else if(!weight_lbs) -> weight_lbs = calculate with weight_kg
// we can then render all information as needed based on chosen units
const Page = () => <div>hi</div>

export default Page