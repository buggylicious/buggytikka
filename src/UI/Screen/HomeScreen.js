import '../CSS/HomeScreen.css';

function HomePage() {
  return (
    <div>
      <div class="share-box">
        <h2>Take care of your personal and financial belongings</h2>
        {/* <p>Subtitle</p> */}
      </div>

      <div className='list-data'>
        <ol>
          <li>Body Mass Index (BMI) is a commonly used tool to assess whether an individual has a healthy body weight in relation to their height. Here are some advantages of calculating and measuring BMI:</li>
        </ol>

        <p>Advantages of calculating and measuring BMI:</p>

        <ul>
          <li><strong>Simple and Quick Assessment:</strong> BMI is easy to calculate and requires only basic information: weight and height. This simplicity makes it a practical tool for quick assessments of body weight.</li>
          <li><strong>Population Health Monitoring:</strong> On a larger scale, BMI is useful for monitoring population health trends. It allows public health professionals to track changes in the prevalence of underweight, normal weight, overweight, and obesity within a population over time.</li>
          <li><strong>Health Risk Identification:</strong> BMI is correlated with various health risks. High BMI is associated with an increased risk of developing conditions such as type 2 diabetes, cardiovascular diseases, and certain cancers. By assessing BMI, individuals and healthcare professionals can identify potential health risks and take preventive measures.</li>
          <li><strong>Treatment Monitoring:</strong> For individuals who are overweight or obese, monitoring BMI over time can help assess the effectiveness of weight management strategies. This can be useful in adjusting treatment plans and interventions.</li>
          <li><strong>Resource Allocation:</strong> In healthcare settings, BMI measurements can assist in resource allocation. For example, identifying individuals with a high BMI may prompt healthcare providers to allocate resources for weight management interventions and preventive care.</li>
          <li><strong>Research and Epidemiology:</strong> BMI is widely used in research studies and epidemiological surveys to investigate the relationships between body weight and various health outcomes. It provides a standardized measure that allows for comparisons across different populations and settings.</li>
          <li><strong>Preventive Health Measures:</strong> By regularly measuring BMI, individuals can be proactive about their health. Monitoring changes in BMI over time can prompt lifestyle modifications and early interventions to prevent weight-related health issues.</li>
          <li><strong>Screening Tool:</strong> BMI serves as a screening tool for identifying individuals who may need further assessment for weight-related health issues. While it is not a diagnostic tool, it can signal the need for more in-depth evaluations.</li>
        </ul>
        <div class="share-box-2">
          <h3>Calculate your BMI now!</h3>
        </div>
      </div>

      
      <div class="share-box-2">
        <h3>EMI Calculator (Coming soon!)</h3>
      </div>
      <div class="share-box-2">
        <h3>PPF Calculator (Coming soon!)</h3>
      </div>
      <div class="share-box-2">
        <h3>FD Calculator (Coming soon!)</h3>
      </div>
    </div>
  );
}

export default HomePage;