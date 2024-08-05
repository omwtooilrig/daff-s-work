<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator Sederhana</title>
    <style>
        body {
            font-family: sans-serif;
        }
        
        .container {
            width: 300px;
            margin: 0 auto;
            text-align: center;
            padding: 20px;
            border: 1px solid #ccc;
        }
        
        input[type="number"],
        input[type="button"] {
            width: 100px;
            margin: 5px;
            padding: 10px;
            border: 1px solid #ccc;
        }
        
        #hasil {
            font-size: 24px;
            font-weight: bold;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Kalkulator Sederhana</h1>
        <input type="number" id="angka1" placeholder="Angka 1">
        <input type="number" id="angka2" placeholder="Angka 2">
        <br>
        <input type="button" id="tambah" value="+" onclick="hitung('+')">
        <input type="button" id="kurang" value="-" onclick="hitung('-')">
        <input type="button" id="kali" value="*" onclick="hitung('*')">
        <input type="button" id="bagi" value="/" onclick="hitung('/')">
        <br>
        <div id="hasil"></div>
    </div>
    <script>
        function hitung(operator) {
            var angka1 = parseFloat(document.getElementById('angka1').value);
            var angka2 = parseFloat(document.getElementById('angka2').value);
            var hasil;
            
            if (operator == '+') {
                hasil = angka1 + angka2;
            } else if (operator == '-') {
                hasil = angka1 - angka2;
            } else if (operator == '*') {
                hasil = angka1 * angka2;
            } else if (operator == '/') {
                if (angka2 == 0) {
                    alert("Error: Pembagian dengan nol tidak diizinkan!");
                    return;
                }
                hasil = angka1 / angka2;
            } else {
                alert("Operator tidak valid!");
                return;
            }
            
            document.getElementById('hasil').innerHTML = hasil;
        }
    </script>
</body>
</html>
