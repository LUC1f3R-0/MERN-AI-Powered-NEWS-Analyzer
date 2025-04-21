const promptBuilder = async (news) => {
    return `
      Fact-check this news: **${news}**.
  
      <h1>TRUE or FAKE</h1> <!-- Only if clear -->
  
      <h2>Summary:</h2>
  
      <h3>Reasoning:</h3>
      <p>Include facts, logic, and sources.</p>
  
      <ul>
        <li><a href="{URL}">{Title}</a></li>
      </ul>
  
      <!-- If unclear: <h3>Needs more verification.</h3> -->
    `;
};

export default promptBuilder;
