from flask import Flask, render_template, request, redirect, url_for, flash
import os

app = Flask(__name__)
app.secret_key = os.urandom(24)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit_report', methods=['POST'])
def submit_report():
    if request.method == 'POST':
        team_name = request.form.get('team_name')
        activity_date = request.form.get('activity_date')
        activity_description = request.form.get('activity_description')
        ai_usage = request.form.get('ai_usage')
        photos = request.files.getlist('photos')
        
        # 여기에 파일 저장 및 데이터베이스 저장 로직 추가 예정
        
        flash('보고서가 성공적으로 제출되었습니다!')
        return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True) 