#include<stdio.h>
#include<stdlib.h>
#include<conio.h>
#include<math.h>
#include<graphics.h>
#include<iostream>
int main()
{
int gd=DETECT,gm;
initgraph(&gd,&gm,(char*)"");
int x1,y1,x2,y2,x3,y3,nx1,nx2,nx3,ny1,ny2,ny3,c;
int tx,ty,sx,sy,r;
float t;
printf("enter the coords of triangle as x1,y1,x2,y2,x3,y3");
scanf("%d %d %d %d %d %d",&x1,&y1,&x2,&y2,&x3,&y3);
line(x1,y1,x2,y2);
line(x2,y2,x3,y3);
line(x3,y3,x1,y1);
while(1)
{
    printf("\n 1.translation \n 2.scaling \n 3.rotation \n 4.exit");
    printf("\n enter your choice");
    scanf("%d",&c);
    if(c==1)
    {
        printf("enter new points");
        scanf("%d %d",&tx,&ty);
        nx1=x1+tx;
        nx2=x2+tx;
        nx3=x3+tx;
        ny1=y1+ty;
        ny2=y2+ty;
        ny3=y3+ty;
        line(nx1,ny1,nx2,ny2);
        line(nx2,ny2,nx3,ny3);
        line(nx3,ny3,nx1,ny1);
    }
    else if(c==2)
    {
        printf("enter scaling factor");
        scanf("%d %d",&sx,&sy);
        nx1=x1*sx;
        nx2=x2*sx;
        nx3=x3*sx;
        ny1=y1*sy;
        ny2=y2*sy;
        ny3=y3*sy;
        line(nx1,ny1,nx2,ny2);
        line(nx2,ny2,nx3,ny3);
        line(nx3,ny3,nx1,ny1);
    }
    else if(c==3)
    {
        printf("enter rotation angle");
        scanf("%d",&r);
        t=(3.14)*r/180;
        nx1=abs(x1*cos(t)-y1*sin(t));
        nx2=abs(x2*cos(t)-y2*sin(t));
        nx3=abs(x3*cos(t)-y3*sin(t));
        ny1=abs(x1*sin(t)-y1*cos(t));
        ny2=abs(x2*sin(t)-y2*cos(t));
        ny3=abs(x3*sin(t)-y3*cos(t));
        line(nx1,ny1,nx2,ny2);
        line(nx2,ny2,nx3,ny3);
        line(nx3,ny3,nx1,ny1);
    }
    else if(c==4)
    break;
    else
    printf("invalid input");
}
getch();
closegraph();
return 0;
}