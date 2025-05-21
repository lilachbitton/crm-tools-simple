// src/components/QuickReference.js
import React, { useState } from 'react';
import { Card, Row, Col, Form, InputGroup, Button, Badge } from 'react-bootstrap';

function QuickReference() {
  // נתוני מערכות CRM
  const crmSystems = [
    {
      id: 'salesforce',
      name: 'Salesforce',
      category: 'enterprise',
      logo: '💼',
      color: '#0176d3',
      summary: 'מערכת CRM מובילה עולמית עם אפשרויות התאמה אישית נרחבות',
      keyStrengths: [
        'פלטפורמה מקיפה לניהול מכירות, שיווק ושירות לקוחות',
        'אקוסיסטם עשיר עם אלפי אפליקציות והרחבות',
        'פתרונות ענן מתקדמים'
      ],
      weaknesses: [
        'עלות גבוהה',
        'דורש זמן הטמעה ארוך',
        'עקומת למידה תלולה'
      ],
      bestFor: 'ארגונים גדולים ובינוניים עם תהליכי מכירות מורכבים',
      pricing: 'מ-25$ למשתמש לחודש, תלוי בחבילה',
      hebrewSupport: 'חלקית'
    },
    {
      id: 'hubspot',
      name: 'HubSpot',
      category: 'all-in-one',
      logo: '🧲',
      color: '#ff7a59',
      summary: 'פלטפורמת שיווק ומכירות משולבת עם חבילה בסיסית חינמית',
      keyStrengths: [
        'שילוב מצוין בין שיווק, מכירות ושירות',
        'חבילה בסיסית חינמית',
        'ממשק ידידותי למשתמש'
      ],
      weaknesses: [
        'עלות גבוהה בחבילות המתקדמות',
        'הגבלות משמעותיות בגרסה החינמית',
        'פחות גמיש מסיילספורס בהתאמה אישית'
      ],
      bestFor: 'עסקים קטנים עד בינוניים עם דגש על שיווק תוכן',
      pricing: 'בסיסי: חינם, מקצועי: מ-45$ למשתמש לחודש',
      hebrewSupport: 'חלקית'
    },
    {
      id: 'monday',
      name: 'Monday Sales CRM',
      category: 'visual',
      logo: '📊',
      color: '#ff3d57',
      summary: 'פתרון CRM ויזואלי וגמיש המתמקד בשיתוף פעולה',
      keyStrengths: [
        'ממשק ויזואלי אינטואיטיבי',
        'גמישות רבה בהתאמה לתהליכים עסקיים',
        'כלי שיתוף פעולה מצוינים'
      ],
      weaknesses: [
        'פחות מתאים למכירות מורכבות',
        'אפשרויות דיווח מוגבלות',
        'חסרות חלק מפונקציות ה-CRM המסורתיות'
      ],
      bestFor: 'צוותים קטנים-בינוניים שמעדיפים גישה ויזואלית',
      pricing: 'מ-8$ למשתמש לחודש, תלוי בחבילה',
      hebrewSupport: 'מלאה'
    },
    {
      id: 'zoho',
      name: 'Zoho CRM',
      category: 'affordable',
      logo: '🔄',
      color: '#8a3391',
      summary: 'פתרון CRM בעלות נמוכה עם יכולות נרחבות',
      keyStrengths: [
        'יחס מחיר-ערך מצוין',
        'אינטגרציה עם מוצרי Zoho אחרים',
        'אוטומציה חזקה'
      ],
      weaknesses: [
        'ממשק משתמש פחות מודרני',
        'תמיכה טכנית מוגבלת',
        'חווית משתמש פחות מלוטשת'
      ],
      bestFor: 'עסקים קטנים עם תקציב מוגבל',
      pricing: 'מ-12$ למשתמש לחודש',
      hebrewSupport: 'חלקית'
    },
    {
      id: 'priority',
      name: 'Priority CRM',
      category: 'israeli',
      logo: '🇮🇱',
      color: '#2a9df4',
      summary: 'מערכת CRM ישראלית המשתלבת עם מערכת ה-ERP של פריוריטי',
      keyStrengths: [
        'תמיכה מלאה בעברית ובתקינה הישראלית',
        'אינטגרציה מובנית עם מערכת ה-ERP',
        'פתרון מקומי עם תמיכה מקומית'
      ],
      weaknesses: [
        'פחות חדשנות לעומת מתחרים בינלאומיים',
        'יכולות מוגבלות בשיווק אוטומטי',
        'פחות אפשרויות הרחבה'
      ],
      bestFor: 'חברות ישראליות שכבר משתמשות בפריוריטי',
      pricing: 'יש לפנות לחברה לקבלת הצעת מחיר',
      hebrewSupport: 'מלאה'
    },
    {
      id: 'dynamics',
      name: 'Microsoft Dynamics 365',
      category: 'enterprise',
      logo: '🔷',
      color: '#0078d4',
      summary: 'פתרון CRM עסקי מבית מיקרוסופט המשתלב עם אקוסיסטם Microsoft',
      keyStrengths: [
        'אינטגרציה מלאה עם מוצרי מיקרוסופט (אופיס, שרינג פוינט)',
        'פתרון עסקי מקיף',
        'יכולות בינה עסקית מתקדמות'
      ],
      weaknesses: [
        'עלות גבוהה',
        'מורכבות גבוהה',
        'דורש מומחיות טכנית להטמעה'
      ],
      bestFor: 'ארגונים גדולים המשתמשים באקוסיסטם מיקרוסופט',
      pricing: 'מ-65$ למשתמש לחודש',
      hebrewSupport: 'מלאה'
    }
  ];

  // קטגוריות למיון
  const categories = [
    { id: 'all', name: 'הכל' },
    { id: 'enterprise', name: 'Enterprise' },
    { id: 'all-in-one', name: 'All-in-One' },
    { id: 'visual', name: 'ויזואלי' },
    { id: 'affordable', name: 'עלות נמוכה' },
    { id: 'israeli', name: 'ישראלי' }
  ];

  // מצב לשמירת פילטרים ומערכת נבחרת
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedSystem, setExpandedSystem] = useState(null);

  // פילטור מערכות CRM
  const filteredSystems = crmSystems.filter(system => {
    const matchesSearch = system.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          system.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || system.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // פתיחה/סגירה של מידע מפורט
  const toggleSystem = (systemId) => {
    if (expandedSystem === systemId) {
      setExpandedSystem(null);
    } else {
      setExpandedSystem(systemId);
    }
  };

  return (
    <div>
      <h1 className="mb-4">כרטיסיות מידע מהירות - מערכות CRM</h1>
      
      <Card className="mb-4">
        <Card.Body>
          <Row>
            <Col md={8} className="mb-3 mb-md-0">
              <InputGroup>
                <Form.Control
                  placeholder="חיפוש מערכת CRM..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <Button variant="outline-secondary" onClick={() => setSearchTerm('')}>
                    נקה
                  </Button>
                )}
              </InputGroup>
            </Col>
            <Col md={4}>
              <Form.Select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      
      <Row>
        {filteredSystems.map(system => (
          <Col key={system.id} lg={4} md={6} className="mb-4">
            <Card 
              className="h-100 cursor-pointer"
              onClick={() => toggleSystem(system.id)}
              style={{ borderTopWidth: '4px', borderTopColor: system.color, cursor: 'pointer' }}
            >
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="h5 mb-0">{system.name}</h3>
                  <span className="fs-3">{system.logo}</span>
                </div>
                <p className="text-muted small mb-2">{system.summary}</p>
                <div className="mb-2">
                  <Badge bg="light" text="dark" style={{ border: '1px solid #ccc' }}>
                    {categories.find(c => c.id === system.category)?.name}
                  </Badge>
                  {' '}
                  <Badge bg={system.hebrewSupport === 'מלאה' ? 'success' : 'warning'}>
                    עברית: {system.hebrewSupport}
                  </Badge>
                </div>
              </Card.Body>
            </Card>
            
            {expandedSystem === system.id && (
              <Card className="mt-2 shadow-sm">
                <Card.Body>
                  <h4 className="h6 mb-2">יתרונות עיקריים:</h4>
                  <ul className="mb-3 ps-3">
                    {system.keyStrengths.map((strength, idx) => (
                      <li key={idx}>{strength}</li>
                    ))}
                  </ul>
                  
                  <h4 className="h6 mb-2">חסרונות:</h4>
                  <ul className="mb-3 ps-3">
                    {system.weaknesses.map((weakness, idx) => (
                      <li key={idx}>{weakness}</li>
                    ))}
                  </ul>
                  
                  <div className="mb-2">
                    <strong>מתאים במיוחד ל:</strong> {system.bestFor}
                  </div>
                  
                  <div className="mb-3">
                    <strong>מחיר:</strong> {system.pricing}
                  </div>
                  
                  <div className="text-center">
                    <Button 
                      variant="outline-secondary" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedSystem(null);
                      }}
                    >
                      סגור
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            )}
          </Col>
        ))}
        
        {filteredSystems.length === 0 && (
          <Col xs={12}>
            <div className="text-center py-5 text-muted">
              <p>לא נמצאו מערכות CRM התואמות לחיפוש שלך</p>
              <Button variant="outline-primary" onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}>
                נקה פילטרים
              </Button>
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
}

export default QuickReference;