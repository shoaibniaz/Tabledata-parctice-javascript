
let data = [
    {
        firstName: 'John',
        lastName: 'Doe',
        rollNumber: 'std_01',
    },
    {
        firstName: 'Alice',
        lastName: 'Smith',
        rollNumber: 'std_02',
    },
    {
        firstName: 'Michael',
        lastName: 'Johnson',
        rollNumber: 'std_03',
    },
    {
        firstName: 'Emily',
        lastName: 'Brown',
        rollNumber: 'std_04',
    },
    {
        firstName: 'Daniel',
        lastName: 'Martinez',
        rollNumber: 'std_05',
    },
    {
        firstName: 'Sophia',
        lastName: 'Taylor',
        rollNumber: 'std_06',
    },
    {
        firstName: 'David',
        lastName: 'Anderson',
        rollNumber: 'std_07',
    },
    {
        firstName: 'Emma',
        lastName: 'Wilson',
        rollNumber: 'std_08',
    },
    {
        firstName: 'James',
        lastName: 'Jackson',
        rollNumber: 'std_09',
    },
    {
        firstName: 'Olivia',
        lastName: 'White',
        rollNumber: 'std_10',
    }
];
function buildTable(item) {
    let col = document.getElementById("tableData");
    console.log('col ===============>', col);
    for (let i = 0; i < item.length; i++) {
        let row = `
        <tr>
        <td>${item[i].firstName}</td>
        <td>${item[i].lastName} </td>
        <td>${item[i].rollNumber}</td>
        </tr>
        `
        col.innerHTML += row
        console.log("col", col);
    }
}
buildTable(data)
