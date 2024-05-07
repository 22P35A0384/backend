import Student from "../models/students.js";

// let x = 'Jami Venkata Sai Gangadhar';
// let y = 'gangadhar';

// if (x.toLowerCase().includes(y.toLowerCase())) {
//     console.log('Yes');
// } else {
//     console.log('No');
// }

// Function to fetch students whose name includes 'sai'
// async function getStudentsWithNameSai() {
    // try {
    //     const students = await Student.find({ name: { $regex: 'SAI', $options: 'i' } });
    //     console.log('Students with "sai" in their name:', students);
    //     return students;
    // } catch (error) {
    //     console.error('Error fetching students:', error);
    //     return [];
    // }
// }

// // Call the function to retrieve students with 'sai' in their name
// getStudentsWithNameSai();

const SearchStd = async(req,res,next)=>{
    const input = req.params.name
    console.log(input)
    try {
        const students = await Student.find({ Permanent_Address: { $regex:input, $options: 'i' } });
        console.log(`Students with "${input}" in their name:`, students.length);
        return res.status(200).json(students);
    } catch (error) {
        console.error('Error fetching students:', error);
        return res.status(404).json(false);
    }
}

export default SearchStd;


