exports.database1 = function(req, res) {
    const mysql = require('mysql');
    const q = req.query;
    console.log(q.title)
    console.log(q.description)
    
    // MySQL 서버와의 연결 생성
    const connection = mysql.createConnection({
        host     : 'localhost',    // MySQL 서버의 호스트 이름
        user     : 'root',         // MySQL 사용자 이름
        password : '1234',     // MySQL 사용자 비밀번호
        database : 'walkway'    // MySQL 데이터베이스 이름
    });

    // MySQL 서버와 연결
    connection.connect(function(err) {
        if (err) throw err;
        console.log('MySQL 서버와 연결되었습니다.');

    // 쿼리 실행
    const sql = "INSERT INTO review (title, description) VALUES (?, ?)";
    connection.query(sql, [q.title, q.description], function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.send("데이터가 성공적으로 저장되었습니다.");
    });

        // MySQL 서버와의 연결 해제
        connection.end(function(err) {
            if (err) throw err;
            console.log('MySQL 서버와의 연결이 해제되었습니다.');
        });
    });
}