const messages = {
    1: {
        question: "Give me insights into my traffic last month", response: ` Last month (October 2023), your website simpleanalytics.com had the following traffic:
Pageviews: 36,593
Visitors: 21,798
Comparing this to the previous month (September 2023), where you had:
Pageviews: 46,085
Visitors: 29,743
There has been a decrease in traffic from September to October:
Pageviews decreased by 9,492 (-20.62%)
Visitors decreased by 7,945 (-26.71%)
Based on this data, you might want to analyze what events took place between September and October that may have influenced the drop in traffic. You could consider examining changes to your marketing strategies, any site issues, or external factors such as seasonality or industry trends. Investigating the cause and then addressing it would be beneficial to regain the traction lost.
Would you like to dive deeper into specifics, like page performance, traffic sources, or visitor demographics?` },
    2: {
        question: "Compare my visitors between this week and last week in a line chart. Explain what you see.", response: `The line chart compares the number of visitors to simpleanalytics.com for the current week (Nov 22 - Nov 28) and the previous week (Nov 15 - Nov 21). Here's what we can observe:

    Overall, there has been a noticeable decrease in visitors this week compared to last week. The total visitors decreased from 5,757 to 5,307.
    The highest number of visitors for both weeks was on Wednesday, with a more significant peak last week.
    The lowest visitor counts for both weeks occurred on weekends, which is consistent with typical user behavior, where visits to business or analytics sites drop off during those days.
    Despite the overall decrease, the patterns of visitor numbers throughout the weeks are similar, with peaks around the beginning and the middle of the week, and troughs during the weekend.
    Here is the visual representation of this comparison:` },
    3: { question: "Create a Pie chart of traffic sources grouped by “organic”, “social”, and “other”", response: "I exist in the digital realm." },
    4: { question: "Tell me a joke.", response: "Here's a pie chart showing the distribution of traffic sources categorized as " },
};

function changeTab(tabNumber) {
    const chatArea = document.getElementById("chatArea");
    const inputMessage = document.getElementById("inputMessage");

    // Clear previous chats in the chatArea
    chatArea.innerHTML = "";

    // Display question with typing animation
    animateTyping(messages[tabNumber].question, inputMessage, () => {
        // Display the next question on the right
        displayQuestion(messages[tabNumber].question, chatArea);

        // Set a delay before displaying the answer
        setTimeout(() => {
            // Display answer after the delay
            displayAnswer(messages[tabNumber].response, chatArea);

            // Clear the input field
            inputMessage.value = "";
        }, 2000);
    });
}


function sendMessage(event) {
    const chatArea = document.getElementById("chatArea");
    const inputMessage = document.getElementById("inputMessage");

    if (event.key === "Enter" && inputMessage.value.trim() !== "") {
        // Display user's message on the left
        displayUserMessage(inputMessage.value, chatArea);

        // Display chatbot's response on the right with typing animation
        animateTyping(messages[1].response, inputMessage, () => {
            // Display the next question on the right
            displayQuestion(messages[1].question, chatArea);

            // Set a delay before displaying the answer
            setTimeout(() => {
                // Display answer after the delay
                displayAnswer(messages[1].response, chatArea);

                // Clear the input field
                inputMessage.value = "";
            }, 1000);
        });
    }
}

function animateTyping(text, inputField, onComplete) {
    let index = 0;
    const intervalId = setInterval(() => {
        inputField.value += text[index];
        index++;
        if (index === text.length) {
            clearInterval(intervalId);
            onComplete();
        }
    }, 50);
}

function displayAnswer(answer, chatArea) {
    // Display chatbot's response on the left
    const responseDiv = document.createElement("div");
    responseDiv.classList.add("message");
    responseDiv.innerHTML = `<div class="response" data-aos="fade-up">${answer}</div>`;
    chatArea.appendChild(responseDiv);
}

function displayUserMessage(message, chatArea) {
    // Display user's message on the right
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    messageDiv.innerHTML = `<div class="question" data-aos="fade-up">${message}</div>`;
    chatArea.appendChild(messageDiv);
}

function displayQuestion(question, chatArea) {
    // Display chatbot's question on the right
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("message");
    questionDiv.innerHTML = `<div class="question" data-aos="fade-up">${question}</div>`;
    chatArea.appendChild(questionDiv);
}