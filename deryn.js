//const expr = 'Humid';

function fanSetting(expr) {
    switch (expr) {
        case 'Hot':
            console.log('The fan is on the highest setting');
            break;
        case 'Medium':
            console.log('The fan is on the middle setting');
            break;
        case 'Cold':
            console.log('The fan is on the lowest setting');
            // expected output: "Mangoes and papayas are $2.79 a pound."
            break;
        default:
            console.log(`It is ${expr}.`);
    }
}
fanSetting('humid');
fanSetting('Cold');
fanSetting('Hot');
