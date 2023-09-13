gradingStudents = () => {
    let grades = [35,36,37,38,49,100,0,2,99] // You can add any grade between 0 <= n <= 100 to test the code.

    let updatedGrades = []
    for(let i = 0;i<grades.length;i++){
        if(grades[i]>37){
            grades[i] = grades[i]%5==3 ? updatedGrades.push(grades[i] += 2) : grades[i]%5==4 ? updatedGrades.push(grades[i]+=1) : updatedGrades.push(grades[i])
        }
        else
        updatedGrades.push(grades[i])
    }
    document.getElementById("result").innerHTML = updatedGrades;
}
gradingStudents()