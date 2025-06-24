// DOM Elements
const form = document.getElementById('predictionForm');
const predictBtn = document.getElementById('predictBtn');
const resetBtn = document.getElementById('resetBtn');
const resultsSection = document.getElementById('resultsSection');
const predictionResult = document.getElementById('predictionResult');

// Form field mappings
const formFields = [
    'age', 'gender', 'place', 'alcoholDuration', 'alcoholQuantity', 'alcoholType',
    'diabetes', 'bloodPressure', 'obesity', 'familyHistory', 'hemoglobin', 'pcv',
    'rbc', 'mcv', 'mch', 'mchc', 'totalCount', 'polymorphs', 'lymphocytes',
    'monocytes', 'eosinophils', 'basophils', 'plateletCount', 'direct', 'indirect',
    'totalProtein', 'albumin', 'globulin', 'phosphatase', 'sgot', 'usgAbdomen'
];

// Initialize form
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    setDefaultValues();
});

function setupEventListeners() {
    form.addEventListener('submit', handleFormSubmit);
    resetBtn.addEventListener('click', resetForm);

    formFields.forEach(fieldName => {
        const field = document.getElementById(fieldName);
        if (field) {
            field.addEventListener('input', validateField);
            field.addEventListener('blur', validateField);
        }
    });
}

function setDefaultValues() {
    const defaults = {
        age: '', gender: '', place: '', alcoholDuration: '0', alcoholQuantity: '0',
        alcoholType: '0', diabetes: '0', bloodPressure: '120', obesity: '0',
        familyHistory: '0', hemoglobin: '13.5', pcv: '40', rbc: '4.5', mcv: '85',
        mch: '30', mchc: '33', totalCount: '7000', polymorphs: '60', lymphocytes: '30',
        monocytes: '5', eosinophils: '3', basophils: '1', plateletCount: '2.5',
        direct: '0.3', indirect: '0.7', totalProtein: '7.2', albumin: '4.2',
        globulin: '3.0', phosphatase: '85', sgot: '35', usgAbdomen: '0'
    };

    Object.entries(defaults).forEach(([key, value]) => {
        const field = document.getElementById(key);
        if (field && value !== '') {
            field.value = value;
        }
    });
}

function validateField(event) {
    const field = event.target;
    const value = field.value;

    // Remove previous error
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) existingError.remove();

    // Required field
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'This field is required');
        return false;
    }

    // Number check
    if (field.type === 'number' && value && isNaN(Number(value))) {
        showFieldError(field, 'Please enter a valid number');
        return false;
    }

    // Min/Max validation
    if (field.type === 'number' && value) {
        const numValue = parseFloat(value);
        const min = parseFloat(field.min);
        const max = parseFloat(field.max);

        if (!isNaN(min) && numValue < min) {
            showFieldError(field, `Value must be at least ${min}`);
            return false;
        }
        if (!isNaN(max) && numValue > max) {
            showFieldError(field, `Value must be at most ${max}`);
            return false;
        }
    }

    return true;
}

function showFieldError(field, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="15" y1="9" x2="9" y2="15"/>
            <line x1="9" y1="9" x2="15" y2="15"/>
        </svg> ${message}
    `;
    field.parentNode.appendChild(errorDiv);
}

function validateForm() {
    let isValid = true;
    document.querySelectorAll('.error-message').forEach(e => e.remove());

    formFields.forEach(fieldName => {
        const field = document.getElementById(fieldName);
        if (field && !validateField({ target: field })) {
            isValid = false;
        }
    });

    return isValid;
}

async function handleFormSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
        const firstError = document.querySelector('.error-message');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        showNotification('Please fix the errors in the form', 'error');
        return;
    }

    setLoadingState(true);

    try {
        const formData = collectFormData();
        console.log(formData)
        const response = await fetch('http://127.0.0.1:8000/api/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        displayResults(result.message);

    } catch (error) {
        console.error('Prediction error:', error);
        showNotification('Error making prediction. Please try again.', 'error');
    } finally {
        setLoadingState(false);
    }
}

function collectFormData() {
    return formFields.map(fieldName => {
        const field = document.getElementById(fieldName);
        if (field) {
            let value = field.value;
            if (field.type === 'number' || field.tagName === 'SELECT') {
                value = parseFloat(value) || 0;
            }
            return value;
        }
        return null;
    });
}

function displayResults(message) {
    predictionResult.innerHTML = `
        <div class="prediction-result">
            <p style="font-size: 1.2rem; margin: 0; text-align: center;">${message}</p>
        </div>
    `;

    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}


function resetForm() {
    form.reset();
    setDefaultValues();
    resultsSection.style.display = 'none';
    document.querySelectorAll('.error-message').forEach(e => e.remove());
    showNotification('Form has been reset', 'success');
}

function setLoadingState(loading) {
    const btnText = predictBtn.querySelector('.btn-text');
    const spinner = predictBtn.querySelector('.loading-spinner');

    if (loading) {
        btnText.textContent = 'Analyzing...';
        spinner.style.display = 'block';
        predictBtn.disabled = true;
    } else {
        btnText.textContent = 'Predict';
        spinner.style.display = 'none';
        predictBtn.disabled = false;
    }
}

function showNotification(message, type = 'info') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px; padding: 16px 24px; background: ${type === 'error' ? '#fef2f2' : '#f0fdf4'};
                    color: ${type === 'error' ? '#dc2626' : '#16a34a'}; border-radius: 8px; margin: 16px 0;
                    border: 1px solid ${type === 'error' ? '#fecaca' : '#bbf7d0'};">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${type === 'error'
                    ? '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>'
                    : '<polyline points="20,6 9,17 4,12"/>'}
            </svg>
            <span>${message}</span>
        </div>
    `;

    form.appendChild(notification);
    setTimeout(() => notification.remove(), 5000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


//contact

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contact-form');

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent page reload

    // Collect form data
    const formData = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      subject: document.getElementById('subject').value.trim(),
      message: document.getElementById('message').value.trim()
    };

    console.log('Form Data:', formData);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        alert('Message sent successfully!');
        contactForm.reset();
      } else {
        alert('Failed to send message: ' + (result.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('An error occurred while sending the message.');
    }
  });
});