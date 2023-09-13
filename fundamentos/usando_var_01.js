{
    {
        {
            {
                var sera = 'Será?';
                console.log(sera);
            }
        }
    }
}
//global
console.log(sera);

function teste() {
    var local = 123;
    console.log(local);
}

teste();
///console.log(local); //ReferenceError: local is not defined