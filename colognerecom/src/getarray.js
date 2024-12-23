export async function getCologneArray(cologneName) {
    if (cologneName === null) {
        return [
            [0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0],
            [0, 0, 0, 0],
            [0]
        ]
    }

    console.log("cologne passed thru is: ", cologneName)
    try {
        const response = await fetch('http://localhost:5000/get-cologne-array', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cologne_name: cologneName }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data)
        return data.array;
    } catch (error) {
        console.error('Error fetching cologne array:', error);
    }
}
