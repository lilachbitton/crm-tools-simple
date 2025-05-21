// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';

function HomePage() {
  const tools = [
    {
      id: 'comparison',
      title: 'השוואת מערכות CRM',
      description: 'כלי להשוואה בין מערכות CRM שונות לפי פרמטרים שונים',
      icon: '📊',
      color: 'card-blue',
      link: '/comparison'
    },
    {
      id: 'reference',
      title: 'כרטיסיות מידע מהירות',
      description: 'מידע תמציתי על כל מערכת CRM בפורמט נוח',
      icon: '📇',
      color: 'card-green',
      link: '/reference'
    },
    {
      id: 'flowchart',
      title: 'תרשים החלטה',
      description: 'מדריך ויזואלי לבחירת מערכת CRM מתאימה',
      icon: '🔍',
      color: 'card-purple',
      link: '/flowchart'
    }
  ];

  return (
    <div>
      <div className="text-center mb-5">
        <h1 className="display-4 mb-3">מרכז כלי CRM</h1>
        <p className="lead">כלים שיעזרו לך להתאים את מערכת ה-CRM המושלמת ללקוחות שלך</p>
      </div>

      <Card className="mb-4">
        <Card.Body>
          <h2>ברוכים הבאים למרכז כלי ה-CRM</h2>
          <p>
            מרכז זה נוצר כדי לעזור לצוות שלנו להבין את ההבדלים בין מערכות CRM שונות, 
            ולהתאים את המערכת הנכונה לצרכים הספציפיים של כל לקוח.
          </p>
          <p>בעזרת הכלים כאן תוכלו:</p>
          <ul>
            <li>להשוות בין מערכות CRM שונות לפי פרמטרים רבים</li>
            <li>לקבל מידע קצר ותמציתי על כל מערכת</li>
            <li>להיעזר בתרשים זרימה שמנחה בתהליך בחירת המערכת המתאימה</li>
          </ul>
        </Card.Body>
      </Card>

      <h2 className="mb-4">הכלים שלנו</h2>
      <Row>
        {tools.map(tool => (
          <Col key={tool.id} md={4} className="mb-4">
            <Card className={`h-100 ${tool.color}`}>
              <Card.Body>
                <div className="d-flex mb-3">
                  <span className="display-5 ms-2">{tool.icon}</span>
                  <h3>{tool.title}</h3>
                </div>
                <Card.Text>{tool.description}</Card.Text>
                <Link to={tool.link} className="btn btn-primary mt-2">פתח כלי</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="bg-light mt-4 mb-4">
        <Card.Body>
          <h2>אודות צוות ה-CRM שלנו</h2>
          <p>
            צוות ה-CRM שלנו מורכב ממומחים בהטמעת מערכות CRM ובניית אוטומציות עסקיות.
            אנחנו כאן כדי לעזור ללקוחות שלנו לבחור ולהטמיע את מערכת ה-CRM המתאימה ביותר.
          </p>
          <p>
            מרכז הכלים הזה מבוסס על מחקר מקיף שביצענו על מערכות CRM מובילות בישראל ובעולם.
          </p>
        </Card.Body>
      </Card>

      <div className="text-center mt-5">
        <h2>מוכנים להתחיל?</h2>
        <p>בחרו אחד מהכלים למעלה והתחילו לחקור את עולם ה-CRM!</p>
        <div className="d-flex justify-content-center gap-3">
          <Button as={Link} to="/comparison" variant="primary" size="lg">השוואת מערכות</Button>
          <Button as={Link} to="/flowchart" variant="success" size="lg">מדריך בחירה</Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;