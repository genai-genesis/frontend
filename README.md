# Inspiration 🌱
Reflecting on our own lives as university students, we realized how busy life can be, balancing sleep, academics, our social lives, and more. There’s barely any time to think of nutritious or healthy recipes, and sometimes we even forget about the food in the back of our fridges.

Several of the United Nations Sustainable Development Goals also motivated us: removing food waste and providing better accessibility to recipes has gargantuan implications on climate, well-being, hunger-related goals, like SDGs 2, 3, 12, and 13. Thus, our aim was to create a solution that not only helps track what you have on hand but also builds up sustainable and healthy habits, reminding you to use all your food before its expiry.

All in all, our app combines the practicality of managing groceries with the joy of cooking, aiming to make daily life both sustainable and delicious. That's how Pocket Fridge was born — an app designed not just to manage our pantry but to inspire us to cook, eat fresh, and live sustainably.

# What it does 🌍
Pocket Fridge transforms your grocery receipts into a digital pantry. The app scans receipts to organize your grocery shopping into a cute virtual fridge/pantry, while also using predictive AI to seamlessly track expiration dates. Gemini generates custom and delicious step-by-step cooking guides—tailored to the items in your very own Pocket Fridge—complete with images to make following along a breeze.

# How we built it 🛠️
We built Pocket Fridge primarily using the MERN stack, integrating MongoDB for data storage, Express.js to handle API requests, React Native for a convenient front-end user interface, and Node.js (hosted/deployed on Railway) for server-side logic.

We explored countless other technologies throughout this project too, creating a Flask Rest API hosted on Google Cloud to leverage Vertex AI (Gemini Pro Vision, Gemini Pro, and Imagen) and rigorously analyze grocery receipts.

# Challenges we ran into 🚧
One of the biggest challenges we faced was in the integration between the different libraries and tools we were trying to implement. Namely, after deploying our two Gemini-pro API models using Flask to the Google Cloud for unrestricted access to our trained AI model, we faced major difficulties in getting React Native to interact with the APIs. Namely, actually formatting an image in React Native that the Gemini-Python APIs would accept proved to be quite the challenge.

Another one of the challenges we faced was setting up the Gemini & Google Cloud suite. Because it is such a new tool, we found there to be limited knowledge of the implementation, resulting in a lot of frustration.

# Accomplishments that we're proud of ✨
Developing Pocket Fridge was an enriching journey, full of collaboration and new technologies. We are proud of successfully developing a system that reliably parses receipts and building an intuitive UI that visually represents the fridge’s contents and seamlessly integrates recipe suggestions. But above all, we are the most proud of the app’s sustainable efforts and its potential to contribute towards a healthier planet. Our app strives to reduce food waste and instill a sustainable mindset in individuals by practicing healthy eating and responsible consumption.

# What we learned 📚
Participating in this hackathon was a very valuable experience that honed a diverse set of skills we look forward to using in our future hackathons, as well as our careers. It gave us a chance to refine our communication skills and collaborative abilities, essential soft skills for any successful project. We embraced the challenge of stepping out of our comfort zones, and looked for opportunities for growth, ensuring each team member engaged with new and less familiar technologies. Additionally, we gained insights into the crucial intersection of technology and social responsibility, learning to weave sustainable practices into software engineering.

# What's next for Pocket Fridge 🔮
Moving forward, we plan to introduce machine learning to predict user preferences and suggest recipes based on past choices. Users will get a more customized experience and enjoyable experience. We are also looking to make it more customizable for the users, so that they could change the expiry dates on their own. We're also exploring partnerships with local food services to suggest deals based on what's in a user's virtual pantry. Finally, we aim to implement a social feature where users can share their favourite recipes with the community.
