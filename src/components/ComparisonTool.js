// src/components/ComparisonTool.js
import React, { useState } from 'react';
import { Row, Col, Card, Form, Button, Table, Badge } from 'react-bootstrap';

function ComparisonTool() {
  // נתוני מערכות CRM
  const crmSystems = [
    {
      id: 1,
      name: "Salesforce",
      price: "גבוה",
      companySize: "בינוני-גדול",
      hebrewSupport: "חלקית",
      userFriendliness: 3,
      setupTime: "ארוך",
      industries: ["היי-טק", "פיננסים", "שירותים מקצועיים"],
      strengths: ["אקוסיסטם רחב", "יכולות התאמה אישית מתקדמות", "תמיכה בתהליכים מורכבים"],
      weaknesses: ["יקר מאוד", "עקומת למידה תלולה", "דורש מומחיות להטמעה"]
    },
    {
      id: 2,
      name: "HubSpot CRM",
      price: "בינוני",
      companySize: "קטן-בינוני",
      hebrewSupport: "חלקית",
      userFriendliness: 4,
      setupTime: "בינוני",
      industries: ["שיווק", "שירותים", "סטארטאפים"],
      strengths: ["חבילה בסיסית חינמית", "שילוב מעולה עם כלי שיווק", "ממשק משתמש נוח"],
      weaknesses: ["יקר בגרסאות המתקדמות", "מוגבל בהתאמה אישית", "פחות מתאים לתהליכי מכירות מורכבים"]
    },
    {
      id: 3,
      name: "Monday CRM",
      price: "בינוני",
      companySize: "קטן-בינוני",
      hebrewSupport: "מלאה",
      userFriendliness: 5,
      setupTime: "קצר",
      industries: ["מדיה", "עיצוב", "שיווק", "סטארטאפים"],
      strengths: ["ממשק ויזואלי וידידותי", "קל להטמעה", "שיתוף פעולה מעולה"],
      weaknesses: ["פחות יכולות מתקדמות", "פחות גמיש", "עלות גבוהה יחסית למשתמש"]
    },
    {
      id: 4,
      name: "Zoho CRM",
      price: "נמוך-בינוני",
      companySize: "קטן-בינוני",
      hebrewSupport: "חלקית",
      userFriendliness: 3,
      setupTime: "בינוני",
      industries: ["שירותים", "מסחר", "עסקים קטנים"],
      strengths: ["מחיר תחרותי", "מגוון פתרונות נלווים", "גמישות"],
      weaknesses: ["ממשק משתמש פחות מודרני", "תמיכה מוגבלת", "אינטגרציות פחות חזקות"]
    },
    {
      id: 5,
      name: "Priority CRM",
      price: "גבוה",
      companySize: "בינוני-גדול",
      hebrewSupport: "מלאה",
      userFriendliness: 3,
      setupTime: "ארוך",
      industries: ["תעשייה", "לוגיסטיקה", "ייצור"],
      strengths: ["אינטגרציה עם ERP", "תמיכה מלאה בעברית", "התאמה לשוק הישראלי"],
      weaknesses: ["ממשק משתמש פחות מודרני", "מוגבל בגמישות", "הטמעה מורכבת"]
    },
    {
      id: 6,
      name: "Microsoft Dynamics 365",
      price: "גבוה",
      companySize: "בינוני-גדול",
      hebrewSupport: "מלאה",
      userFriendliness: 2,
      setupTime: "ארוך",
      industries: ["פיננסים", "ייצור", "קמעונאות"],
      strengths: ["אינטגרציה עם מוצרי מיקרוסופט", "יכולות מתקדמות", "פתרון עסקי מקיף"],
      weaknesses: ["מורכב מאוד", "יקר", "דורש יועצים מומחים להטמעה"]
    }
  ];

  // פילטרים
  const [filters, setFilters] = useState({
    price: "",
    companySize: "",
    hebrewSupport: "",
    userFriendliness: "",
    industry: ""
  });

  // מערכות נבחרות להשוואה
  const [selectedCRMs, setSelectedCRMs] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  // עדכון פילטרים
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  // איפוס פילטרים
  const resetFilters = () => {
    setFilters({
      price: "",
      companySize: "",
      hebrewSupport: "",
      userFriendliness: "",
      industry: ""
    });
  };

  // בחירת/ביטול בחירת מערכת CRM
  const toggleCRMSelection = (crmId) => {
    if (selectedCRMs.includes(crmId)) {
      setSelectedCRMs(selectedCRMs.filter(id => id !== crmId));
    } else {
      setSelectedCRMs([...selectedCRMs, crmId]);
    }
  };

  // סינון מערכות CRM לפי פילטרים
  const filteredCRMs = crmSystems.filter(crm => {
    const matchesPrice = !filters.price || crm.price === filters.price;
    const matchesSize = !filters.companySize || crm.companySize === filters.companySize;
    const matchesHebrew = !filters.hebrewSupport || crm.hebrewSupport === filters.hebrewSupport;
    const matchesUserFriendliness = !filters.userFriendliness || crm.userFriendliness >= parseInt(filters.userFriendliness);
    const matchesIndustry = !filters.industry || crm.industries.includes(filters.industry);
    
    return matchesPrice && matchesSize && matchesHebrew && matchesUserFriendliness && matchesIndustry;
  });

  // רשימת תעשיות ייחודיות
  const allIndustries = Array.from(new Set(crmSystems.flatMap(crm => crm.industries)));
  
  // כוכבים לדירוג ידידותיות למשתמש
  const renderStars = (count) => {
    return "⭐".repeat(count);
  };

  return (
    <div>
      <h1 className="mb-4">השוואת מערכות CRM</h1>
      
      {!showComparison ? (
        <>
          <Card className="mb-4">
            <Card.Body>
              <h2>סינון מערכות CRM</h2>
              <Row className="mb-3">
                <Col md={4} className="mb-3">
                  <Form.Group>
                    <Form.Label>טווח מחירים:</Form.Label>
                    <Form.Select name="price" value={filters.price} onChange={handleFilterChange}>
                      <option value="">כל המחירים</option>
                      <option value="נמוך">נמוך</option>
                      <option value="נמוך-בינוני">נמוך-בינוני</option>
                      <option value="בינוני">בינוני</option>
                      <option value="גבוה">גבוה</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4} className="mb-3">
                  <Form.Group>
                    <Form.Label>גודל חברה:</Form.Label>
                    <Form.Select name="companySize" value={filters.companySize} onChange={handleFilterChange}>
                      <option value="">כל הגדלים</option>
                      <option value="קטן">קטן</option>
                      <option value="קטן-בינוני">קטן-בינוני</option>
                      <option value="בינוני">בינוני</option>
                      <option value="בינוני-גדול">בינוני-גדול</option>
                      <option value="גדול">גדול</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4} className="mb-3">
                  <Form.Group>
                    <Form.Label>תמיכה בעברית:</Form.Label>
                    <Form.Select name="hebrewSupport" value={filters.hebrewSupport} onChange={handleFilterChange}>
                      <option value="">הכל</option>
                      <option value="מלאה">מלאה</option>
                      <option value="חלקית">חלקית</option>
                      <option value="אין">אין</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={4} className="mb-3">
                  <Form.Group>
                    <Form.Label>ידידותיות למשתמש (מינימום):</Form.Label>
                    <Form.Select name="userFriendliness" value={filters.userFriendliness} onChange={handleFilterChange}>
                      <option value="">כל הדירוגים</option>
                      <option value="1">⭐ ומעלה</option>
                      <option value="2">⭐⭐ ומעלה</option>
                      <option value="3">⭐⭐⭐ ומעלה</option>
                      <option value="4">⭐⭐⭐⭐ ומעלה</option>
                      <option value="5">⭐⭐⭐⭐⭐</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4} className="mb-3">
                  <Form.Group>
                    <Form.Label>תעשייה:</Form.Label>
                    <Form.Select name="industry" value={filters.industry} onChange={handleFilterChange}>
                      <option value="">כל התעשיות</option>
                      {allIndustries.map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4} className="d-flex align-items-end mb-3">
                  <Button variant="secondary" onClick={resetFilters}>איפוס פילטרים</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <div className="mb-3 d-flex justify-content-between align-items-center">
            <p className="mb-0">נמצאו {filteredCRMs.length} מערכות CRM מתאימות</p>
            {selectedCRMs.length > 0 && (
              <Button 
                variant="primary"
                onClick={() => setShowComparison(true)}
              >
                השווה {selectedCRMs.length} מערכות נבחרות
              </Button>
            )}
          </div>

          <Row>
            {filteredCRMs.map(crm => (
              <Col key={crm.id} lg={4} md={6} className="mb-4">
                <Card className={selectedCRMs.includes(crm.id) ? 'border-primary' : ''}>
                  <Card.Header className="d-flex justify-content-between align-items-center">
                    <h3 className="h5 mb-0">{crm.name}</h3>
                    <Form.Check 
                      type="checkbox" 
                      checked={selectedCRMs.includes(crm.id)}
                      onChange={() => toggleCRMSelection(crm.id)}
                      label="הוסף להשוואה"
                    />
                  </Card.Header>
                  <Card.Body>
                    <div className="mb-3">
                      <Badge bg="primary" className="me-1">מחיר: {crm.price}</Badge>
                      <Badge bg="secondary" className="me-1">גודל חברה: {crm.companySize}</Badge>
                      <Badge bg={crm.hebrewSupport === 'מלאה' ? 'success' : 'warning'}>
                        עברית: {crm.hebrewSupport}
                      </Badge>
                    </div>
                    
                    <div className="mb-2">
                      <strong>יתרונות:</strong>
                      <ul className="mb-3">
                        {crm.strengths.map((strength, idx) => (
                          <li key={idx}>{strength}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-2">
                      <strong>חסרונות:</strong>
                      <ul className="mb-3">
                        {crm.weaknesses.map((weakness, idx) => (
                          <li key={idx}>{weakness}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-2">
                      <strong>תעשיות מתאימות:</strong> {crm.industries.join(', ')}
                    </div>
                    
                    <div className="mb-2">
                      <strong>ידידותיות למשתמש:</strong> {renderStars(crm.userFriendliness)}
                    </div>
                    
                    <div>
                      <strong>זמן הטמעה:</strong> {crm.setupTime}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <>
          <div className="mb-4">
            <Button variant="secondary" onClick={() => setShowComparison(false)}>
              &larr; חזרה לכל המערכות
            </Button>
          </div>
          
          <div className="table-responsive">
            <Table bordered>
              <thead>
                <tr className="bg-light">
                  <th>קריטריון</th>
                  {selectedCRMs.map(id => {
                    const crm = crmSystems.find(c => c.id === id);
                    return <th key={id}>{crm.name}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>מחיר</strong></td>
                  {selectedCRMs.map(id => {
                    const crm = crmSystems.find(c => c.id === id);
                    return <td key={id}>{crm.price}</td>;
                  })}
                </tr>
                <tr>
                  <td><strong>גודל חברה מתאים</strong></td>
                  {selectedCRMs.map(id => {
                    const crm = crmSystems.find(c => c.id === id);
                    return <td key={id}>{crm.companySize}</td>;
                  })}
                </tr>
                <tr>
                  <td><strong>תמיכה בעברית</strong></td>
                  {selectedCRMs.map(id => {
                    const crm = crmSystems.find(c => c.id === id);
                    return <td key={id}>{crm.hebrewSupport}</td>;
                  })}
                </tr>
                <tr>
                  <td><strong>זמן הטמעה</strong></td>
                  {selectedCRMs.map(id => {
                    const crm = crmSystems.find(c => c.id === id);
                    return <td key={id}>{crm.setupTime}</td>;
                  })}
                </tr>
                <tr>
                  <td><strong>יתרונות</strong></td>
                  {selectedCRMs.map(id => {
                    const crm = crmSystems.find(c => c.id === id);
                    return (
                      <td key={id}>
                        <ul className="ps-3 mb-0">
                          {crm.strengths.map((strength, idx) => (
                            <li key={idx}>{strength}</li>
                          ))}
                        </ul>
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td><strong>חסרונות</strong></td>
                  {selectedCRMs.map(id => {
                    const crm = crmSystems.find(c => c.id === id);
                    return (
                      <td key={id}>
                        <ul className="ps-3 mb-0">
                          {crm.weaknesses.map((weakness, idx) => (
                            <li key={idx}>{weakness}</li>
                          ))}
                        </ul>
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td><strong>ידידותיות למשתמש</strong></td>
                  {selectedCRMs.map(id => {
                    const crm = crmSystems.find(c => c.id === id);
                    return <td key={id}>{renderStars(crm.userFriendliness)}</td>;
                  })}
                </tr>
                <tr>
                  <td><strong>תעשיות מתאימות</strong></td>
                  {selectedCRMs.map(id => {
                    const crm = crmSystems.find(c => c.id === id);
                    return <td key={id}>{crm.industries.join(', ')}</td>;
                  })}
                </tr>
              </tbody>
            </Table>
          </div>
        </>
      )}
    </div>
  );
}

export default ComparisonTool;