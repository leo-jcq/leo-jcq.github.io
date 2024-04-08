export default function getAge(birthDate: Date): number {

    // Retrieve birth date informations
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();

    console.log(birthDate)

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

    return age;
}
