function HomeController($scope){
    $scope.start_this_game=function(){
        localStorage.a_fixed_num = random_a_num();
        localStorage.guess_times = 0;
        $scope.display='****';
        $scope.num_input='';
        $scope.alert_message='Notice there,after "compute".';
    }

    $scope.guess_it=function(){
        localStorage.guess_times=JSON.stringify(JSON.parse(localStorage.guess_times)+1);
        localStorage.a_guessed_num = $scope.num_input;
        var result = compare_num(localStorage.a_fixed_num,localStorage.a_guessed_num);
        if(result=='4A0B'){
            $scope.display="Clever!It's'"+localStorage.a_fixed_num+"',total'"+localStorage.guess_times+"'times.";
            $scope.alert_message="You are win";
        }else{
            $scope.display=result;
            if(localStorage.getItem("guess_times")=='8'){
                $scope.alert_message="Game over"
            }else{
                var rest_time = 8-JSON.parse(localStorage.getItem('guess_times'))
                $scope.alert_message="You are wrong, "+ rest_time +" times left"
            }
        }

    }
}