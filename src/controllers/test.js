const list = [{name:'sai',clg:'acet'},{name:'sai',clg:'acet'},{name:'sai',clg:'acet'},{name:'sai',clg:'acet'},{name:'sai',clg:'acet'},{name:'sai',clg:'acet'},{name:'sai',clg:'acet'},{name:'sai',clg:'acet'},{name:'sai',clg:'acet'},{name:'sai',clg:'acet'},{name:'sai',clg:'acet'},{name:'sai',clg:'acet'}]

// console.log(list.length)

for (let i = 0; i < list.length; i++) {
    const element = list[i];
    console.log(element.name)
}

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