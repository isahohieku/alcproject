export const htmlTemplate = `

<!Doctype>
<html>
    <head>
        <link href="css/style.css" rel="stylesheet">
    </head>
    <body>
        <div class="wrapper">

        </div>

        <div class="purpleShadeOpacityOverlap">

        </div>

        <div class="andela">
            <img src="img/andelaWhite.png" />
            <p class="andelaCommunity">Andela Learning Community</p>
            <p class="codeChallenge">#7DaysofCodeChallenge</p>
        </div>

        <div class="converter">
            <p class="formHeader">currency converter</p>
            <p class="convertedCurrency">
                0.00
            </p>


            <form method="POST" action="/convert">
                <div class="inputWrapper">
                    <input type="text" placeholder="Enter Amount" name="amount">
                </div>

                <div class="fromTo">
                    <div class="selectWrapper">
                        <select name="currency1">
                            <option>From</option>
                        </select>
                    </div>
                    <img src="img/convert2.png">
                    <div class="selectWrapper">
                        <select name='currency2'>
                            <option>To</option>
                        </select>
                    </div>
                </div>
                <div class="submit">
                        <button type="submit" onclick="dontReload()">Convert</button>
                </div>
                
            </form>
        </div>

        <script src="js/main/index.js" type="text/javascript"></script>
    </body>
</html>

`

export default{
    htmlTemplate
}