document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.js-form')) {
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

                messages: {
                    name: {
                        minLength: 'My custom message about only minLength rule'
                    },
                    email: 'My custom message about error (one error message for all rules)'
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
    }
})
