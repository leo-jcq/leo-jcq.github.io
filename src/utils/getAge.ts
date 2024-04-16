/**
 * Get the age of a person based on his birth date
 *
 * @export
 * @param {Date} birthDate The birth date of the person
 * @return {number} The age of the person
 */
export default function getAge(birthDate: Date): number {
    // Retrieve birth date informations
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();

    // Retrieve current date
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const currentDay = now.getDate();

    // Calculate age
    let age = currentYear - birthYear;

    // Check if the person's birthday has not yet occurred this year
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age--;
    }

    // Return the age
    return age;
}
