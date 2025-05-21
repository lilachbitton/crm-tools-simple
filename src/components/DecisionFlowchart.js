// src/components/DecisionFlowchart.js
import React, { useEffect } from 'react';
import { Card, Alert } from 'react-bootstrap';
import mermaid from 'mermaid';

function DecisionFlowchart() {
  useEffect(() => {
    // הגדרת mermaid
    mermaid.initialize({ 
      startOnLoad: true,
      theme: 'default',
      flowchart: { 
        useMaxWidth: true, 
        htmlLabels: true 
      }
    });

    // אתחול התרשים
    setTimeout(() => {
      mermaid.init(undefined, document.querySelector('.mermaid'));
    }, 200);
  }, []);

  // הגדרת תרשים ה-Mermaid כמחרוזת
  const diagram = `flowchart TD
    Start([התחלת תהליך בחירת CRM]) --> Budget{מה התקציב?}
    Budget -->|נמוך| LowBudget[מערכות בתקציב נמוך]
    Budget -->|בינוני| MediumBudget[מערכות בתקציב בינוני]
    Budget -->|גבוה| HighBudget[מערכות בתקציב גבוה]
    
    LowBudget --> HebrewLow{צריך תמיכה מלאה בעברית?}
    HebrewLow -->|כן| LowHebrewYes[Zoho CRM, Bitrix24]
    HebrewLow -->|לא| LowHebrewNo[HubSpot Free, Monday.com Basic]
    
    MediumBudget --> CompanySize{גודל החברה?}
    CompanySize -->|קטן| SmallCompany[HubSpot Starter, Monday.com Standard]
    CompanySize -->|בינוני| MediumCompany[Zoho Enterprise, HubSpot Professional]
    CompanySize -->|גדול| LargeCompany[סיילספורס Essentials, Microsoft Dynamics 365]
    
    HighBudget --> IntegrationType{איזה סוג אינטגרציות נדרש?}
    IntegrationType -->|ERP| ERPInt[Priority CRM, SAP]
    IntegrationType -->|אקוסיסטם שיווקי| MarketingInt[HubSpot Enterprise, Marketo]
    IntegrationType -->|מערכות פנים ארגוניות| InternalInt[Salesforce, Dynamics 365]
    
    %% עיצוב
    classDef start fill:#f9f9f9,stroke:#333,stroke-width:2px
    classDef question fill:#e1f5fe,stroke:#01579b,stroke-width:1px,color:#01579b,font-weight:bold
    classDef option fill:#fff3e0,stroke:#e65100,stroke-width:1px,color:#e65100
    classDef result fill:#e8f5e9,stroke:#2e7d32,stroke-width:1px,color:#2e7d32
    
    class Start start
    class Budget,HebrewLow,CompanySize,IntegrationType question
    class LowBudget,MediumBudget,HighBudget option
    class LowHebrewYes,LowHebrewNo,SmallCompany,MediumCompany,LargeCompany,ERPInt,MarketingInt,InternalInt result`;

  return (
    <div>
      <h1 className="mb-4">מדריך החלטה - בחירת מערכת CRM</h1>
      
      <Card className="mb-4">
        <Card.Body>
          <h2>איך להשתמש במדריך ההחלטה</h2>
          <p>
            תרשים זרימה זה נועד לעזור לכם לבחור את מערכת ה-CRM המתאימה ביותר עבור הלקוח שלכם.
            התחילו למעלה ועקבו אחר השאלות והתשובות כדי להגיע להמלצה.
          </p>
          <ul>
            <li>התרשים מתחיל בשאלה על תקציב</li>
            <li>אחר כך עוברים לנושאים כמו תמיכה בעברית, גודל חברה, ואינטגרציות נדרשות</li>
            <li>המלצות מערכות ה-CRM מופיעות בתיבות הירוקות</li>
          </ul>
        </Card.Body>
      </Card>
      
      <Card className="mb-4">
        <Card.Body>
          {/* שימוש במחרוזת שהגדרנו למעלה */}
          <div className="mermaid text-center" style={{ direction: 'ltr' }}>
            {diagram}
          </div>
        </Card.Body>
      </Card>
      
      <Alert variant="info">
        <h3>טיפים לשימוש במדריך</h3>
        <ul className="mb-0">
          <li>זכרו שהמדריך מציע המלצות כלליות - כל מקרה צריך להיבחן לגופו</li>
          <li>שווה לבדוק יותר מאפשרות אחת מהמומלצות</li>
          <li>כדאי להתחשב גם בניסיון הקודם של הלקוח עם מערכות CRM</li>
        </ul>
      </Alert>
    </div>
  );
}

export default DecisionFlowchart;