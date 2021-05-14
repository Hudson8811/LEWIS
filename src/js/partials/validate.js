document.addEventListener('DOMContentLoaded', () => {
    console.log('w')
    new JustValidate('.js-form', {
        rules: {
            name: {
                required: true,
                minLength: 2,
                maxLength: 20,
            },
            email: {
                required: true,
                email: true
            },
            checkbox:{
                required: true
            },
            text:{
                required: true,
                minLength: 2
            },
            messages: {
                name: {
                    minLength: 'My custom message about only minLength rule'
                },
                email: 'My custom message about error (one error message for all rules)',
                checkbox: 'My custom message for checkbox',
                text: 'My custom message for textarea'
            },

            tooltip: {
                fadeOutClass: '.error'
            }

            // submitHandler: function (form, values, ajax) {

            //     ajax({
            //         url: 'https://just-validate-api.herokuapp.com/submit',
            //         method: 'POST',
            //         data: values,
            //         async: true,
            //         callback: function (response) {
            //             console.log(response)
            //         }
            //     });
            // },
        }
    });
})
