$(document).ready(function() {
 /** 
* clock ready

 */

					$('#fancyClock').tzineClock();   
 /** 
* music ready

 */
			new jPlayerPlaylist(
			{
				jPlayer : "#jquery_jplayer_1",
				cssSelectorAncestor : "#jp_container_1"
			},
			[{
				title : "淋雨一直走",
				artist : "张韶涵",
				m4v : "video/walk_in_rain.mp4",

			},
			{
				title : "In A World Like This",
				artist : "Backstreet Boys",
				m4v : "video/In_A_World_Like_This.mp4",
			},
			{
				title : "Highway Don't Care",
				artist : "Tim McGraw & Taylor Swift",
				m4v : "video/Highway_Don't_Care.mp4",
			},
			{
				title : "The Other Side",
				artist : " Kurt Schneider & Jason Derulo & Keke Palmer & Max Schneider",
				m4v : "video/The_Other_Side.mp4",
			} ], 
			{
				swfPath : "js",
				supplied : "webmv,m4v",
				smoothPlayBar : true,
				keyEnabled : true,
				audioFullScreen : true
			});

 /** 
* scoll-bar ready

 */
			$('#work').perfectScrollbar();
			$("#work").scrollLeft(300);
			$("#work").perfectScrollbar('update');
			$('body').perfectScrollbar();
			$("body").scrollLeft(300);
			$("body").perfectScrollbar('update');
					
 /** 
* time-line ready

 */					
					$('body').css('overflow-x', 'hidden');
					var con = $('.timeline-container');
					var position = con.position();
					$('#timeline-outputtext').css('top', (position.top + 130));

					$('.time-line-href').on('click', function(e) {
						e.preventDefault();
						$('.circleLine').css('opacity', '0')
						$(this).find('div').css('opacity', '1')
						$('#timeline-outputtext').animate({
							'left' : -275
						});
					});
					$('.timeline-circles').on(
							'click',
							function() {
								var outputR = $('#timeline-outputtext').css(
										'<?php echo direction;?>');
								if (outputR == '-275px') {
									$('#timeline-outputtext').animate({
										'left' : '0'
									});
								} else {
									$('#timeline-outputtext').animate({
										'left' : '-275px'
									}).animate({
										'left' : '0'
									});
								}
							});
				});