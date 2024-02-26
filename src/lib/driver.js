import {driver} from "driver.js";
import "../styles/driver.css";

export const navDriver = () => {
    const driverObj = driver({
        showProgress: true,
        steps: [
            {
                element: '#project-link',
                popover: {
                    title: 'SnX',
                    description: 'Explore SnX and customize your outfit. Dive into a world of personalized fashion where you can tailor your look to match your unique style and preferences.'
                }
            },
            {
                element: '#home-link',
                popover: {
                    title: 'Home',
                    description: 'Return to the Home page. Navigate back to the main landing page to explore new features, updates, and announcements related to SnX.'
                }
            },
            {
                element: '#create-link',
                popover: {
                    title: 'Create',
                    description: 'Initiate the creation of new outfits. Get started on designing and crafting your latest ensemble with our intuitive outfit customization tools.'
                }
            },
            {
                element: '#contact-link',
                popover: {
                    title: 'Contact',
                    description: 'Connect with customer support. Reach out to our dedicated customer service team for assistance, inquiries, or feedback regarding your SnX experience.'
                }
            },
            {
                element: '#help-button',
                popover: {
                    title: 'Guide',
                    description: 'Access the user guide. Explore our comprehensive guide designed to help you navigate through SnX\'s features and functionalities seamlessly.'
                }
            },
            {
                element: '#account-link',
                popover: {
                    title: 'Profile',
                    description: 'View and manage your profile. Access your personalized profile dashboard to track your activity, manage preferences, and update account details effortlessly.'
                }
            }
        ]
    });

    driverObj.drive();
}

export const createDriver = () => {
    const driverObj = driver({
        showProgress: true,
        steps: [
            {element: '#shirt-button', popover: {title: 'Shirt', description: 'Customize a shirt'}},
            {element: '#shoes-button', popover: {title: 'Shoes', description: 'Design a shoes now'}},
            {element: '#pant-button', popover: {title: 'Pant', description: 'Create a new Pant'}},
            {element: '#cap-button', popover: {title: 'Cap', description: 'Start designing a cap'}},
            {element: '#recents', popover: {title: 'Recents', description: 'Check out your recent creations'}},
        ]
    });

    driverObj.drive();
}

export const createDesignerDriver = () => {
    const driverObj = driver({
        showProgress: true,
        steps: [
            {
                element: '#studio-viewer',
                popover: {
                    title: 'Model',
                    description: 'Design your model as you wish. Use various tools and options to create a unique and personalized design.'
                }
            },
            {
                element: '#design-options',
                popover: {
                    title: 'Options',
                    description: 'Choose from a variety of design options. Explore different features and functionalities to enhance your model.'
                }
            },
            {
                element: '#color-container',
                popover: {
                    title: 'Colors',
                    description: 'Select colors for your model. Choose from a wide range of color options to customize your design.'
                }
            },
            {
                element: '#background-container',
                popover: {
                    title: 'Set Background',
                    description: 'Set the background color or image for your model. Personalize the backdrop to complement your design.'
                }
            },
            {
                element: '#misc-container',
                popover: {
                    title: 'Miscellaneous',
                    description: 'Access miscellaneous settings for your model. Fine-tune various parameters to achieve your desired look.'
                }
            },
            {
                element: '#size-container',
                popover: {
                    title: 'Sizes',
                    description: 'Select the size of your model. Choose the dimensions that best fit your requirements and preferences.'
                }
            },
            {
                element: '#decals-container',
                popover: {
                    title: 'Decals',
                    description: 'Add decals and images to your model. Enhance your design with custom decals and graphics.'
                }
            },
            {
                element: '#text-container',
                popover: {
                    title: 'Text',
                    description: 'Add custom text to your model. Personalize your design with unique text elements and messages.'
                }
            },
            {
                element: '#text-format-container',
                popover: {
                    title: 'Text Format',
                    description: 'Type your text and apply styling. Customize the appearance and formatting of your text elements.'
                }
            },
            {
                element: '#reset-button',
                popover: {
                    title: 'Reset',
                    description: 'Reset your model to its default state. Undo any changes and start fresh with your design.'
                }
            },
            {
                element: '#export-container',
                popover: {
                    title: 'Export',
                    description: 'Export your model as an image or 3D model file. Save and share your designs with others.'
                }
            },
            {
                element: '#save-button',
                popover: {
                    title: 'Save',
                    description: 'Save your model. Preserve your design for future reference or sharing with others.'
                }
            }
        ]
    });

    driverObj.drive();
}

export const contactDriver = () => {
    const driverObj = driver({
        showProgress: true,
        steps: [
            {
                element: '#about-us',
                popover: {
                    title: 'About Us',
                    description: 'Learn more about our company and what we offer. Customize a shirt to your liking.'
                },
            },
            {
                element: '#faq',
                popover: {
                    title: 'FAQ',
                    description: 'Find answers to frequently asked questions. Design shoes now and explore our FAQ section.'
                },
            },
            {
                element: '#contact-links',
                popover: {
                    title: 'Contact Links',
                    description: 'Connect with us through various contact channels. Create a new pant and get in touch.'
                },
            },
            {
                element: '#recents',
                popover: {
                    title: 'Recents',
                    description: 'View your recent creations and explore your design history. Check out your recent designs.'
                },
            }
        ]
    });

    driverObj.drive();
}

export const accountDriver = () => {
    const driverObj = driver({
        showProgress: true,
        steps: [
            {
                element: '#delete-account',
                popover: {title: 'Delete Account', description: 'Click here to delete your account.'}
            },
            {element: '#username_text', popover: {title: 'Username', description: 'Your username is displayed here.'}},
            {element: '#email_text', popover: {title: 'Email', description: 'Your email address is shown here.'}},
            {element: '#password_text', popover: {title: 'Password', description: 'Your password is displayed here.'}},
            {
                element: '#phone_text',
                popover: {title: 'Phone Number', description: 'Your phone number is displayed here.'}
            },
        ]
    });

    driverObj.drive();
}
