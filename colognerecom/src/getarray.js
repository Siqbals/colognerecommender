export async function getCologneArray(cologneName) {
    console.log("func entered")
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
        return data.array
    } catch (error) {
        console.error('Error fetching cologne array:', error);
    }
}
