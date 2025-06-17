document.addEventListener('DOMContentLoaded', function() {
    // 파일 업로드 미리보기 기능
    const photoInput = document.getElementById('photos');
    if (photoInput) {
        photoInput.addEventListener('change', function(e) {
            const files = e.target.files;
            if (files.length > 0) {
                // 파일 크기 및 형식 검증
                for (let file of files) {
                    if (file.size > 5 * 1024 * 1024) { // 5MB 제한
                        alert('파일 크기는 5MB를 초과할 수 없습니다.');
                        photoInput.value = '';
                        return;
                    }
                    if (!file.type.startsWith('image/')) {
                        alert('이미지 파일만 업로드 가능합니다.');
                        photoInput.value = '';
                        return;
                    }
                }
            }
        });
    }

    // 폼 제출 전 유효성 검사
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const teamName = document.getElementById('team_name').value;
            const activityDate = document.getElementById('activity_date').value;
            const activityDescription = document.getElementById('activity_description').value;
            const aiUsage = document.getElementById('ai_usage').value;

            if (!teamName || !activityDate || !activityDescription || !aiUsage) {
                e.preventDefault();
                alert('모든 필수 항목을 입력해주세요.');
                return;
            }

            if (activityDescription.length < 100) {
                e.preventDefault();
                alert('활동 내용은 최소 100자 이상 입력해주세요.');
                return;
            }

            if (aiUsage.length < 50) {
                e.preventDefault();
                alert('AI 활용 방법은 최소 50자 이상 입력해주세요.');
                return;
            }
        });
    }
}); 