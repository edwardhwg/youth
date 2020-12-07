    headers: JSON.parse(qqreadheaderVal),
521
   timeout:60000};
522
   $.get(toqqreadboxurl,(error, response, data) =>{
523
     if(logs) $.log(`${jsname}, 宝箱奖励: ${data}`)
524
     box =JSON.parse(data)
525
​
526
if (box.data.count>=0)
527
 {
528
tz+=
529
'【宝箱奖励'+box.data.count+'】:获得'+box.data.amount+'金币\n'
530
​
531
 } 
532
    
533
resolve()
534
    })
535
   })
536
  }  
537
​
538
//宝箱奖励翻倍
539
function qqreadbox2() {
540
return new Promise((resolve, reject) => {
541
​
542
  const toqqreadbox2url ={url: 'https://mqqapi.reader.qq.com/mqq/red_packet/user/treasure_box_video',
543
​
544
    headers: JSON.parse(qqreadheaderVal),
545
   timeout:60000};
546
   $.get(toqqreadbox2url,(error, response, data) =>{
547
     if(logs) $.log(`${jsname}, 宝箱奖励翻倍: ${data}`)
548
     box2 =JSON.parse(data)
549
​
550
if (box2.code==0)
551
 {
552
tz+=
553
'【宝箱翻倍】:获得'+box2.data.amount+'金币\n'
554
}
555
​
556
resolve()
557
    })
558
   })
559
  }  
560
​
561
//本周阅读时长
562
function qqreadwktime() {
563
return new Promise((resolve, reject) => {
564
​
565
  const toqqreadwktimeurl = {
566
​
567
    url: `https://mqqapi.reader.qq.com/mqq/v1/bookShelfInit`,
568
​
569
    headers: JSON.parse(qqreadheaderVal),
570
     
571
    };
572
​
573
   $.get(toqqreadwktimeurl,(error, response, data) =>{
574
     if(logs) $.log(`${jsname}, 阅读时长: ${data}`)
575
     wktime =JSON.parse(data)
