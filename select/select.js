const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function () {
  const userName = document.getElementById('userName').value;
  const majorSelect = document.getElementById('major').value;
  const selectedMajor = majorSelect.value || '선택되지 않음';
  const selectedSubject = document.querySelector('input[name="subject"]:checked');
  const subjectValue = selectedSubject ? selectedSubject.value : '선택되지 않음';
  const selectedStudy = document.querySelector('input[name');
  const studyValue = selectedStudy ? selectedStudy.value : '선택되지 않음';

  document.getElementById('result').innerHTML = `${username} ${selectedMajor} ${subjectValue} ${studyValue}`;
});

document.getElementById('submitBtn');
